import { useConst } from "@fluentui/react-hooks";
import { useAsyncEffect } from "ahooks";
import { useState } from "react";
import type { Logger } from "~/Helpers/Logger";
import { IComboItem } from "~/Pages/Admin/Product/Combo";
import type { IGallery } from "~/Pages/Gallery";
import { ProductData } from "./Data";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
export abstract class ProductGet extends ProductData {
  /** "Product", "Get" */
  protected static override readonly Log = [...super.Log, "Product", "Get"];

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 1.1.0
   * @liveSafe
   */
  public static async Basic(prodId: number, pLog: Logger): Promise<IGallery> {
    const log = pLog.With(...this.Log, "Basic");

    const res = await this.Product(prodId);
    if (!res)
      throw new Error(`Product ${prodId} Not Found`);

    const [_, cover] = await this.PhotoList(prodId, pLog);

    if (cover)
      return {
        Name: res.Name,
        Cover: cover
      };

    log.warn(`Product ${prodId} has no photo`);
    return {
      Name: res.Name,
      Cover: "",
    };
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.1
   */
  public static Limit(prodId: number): Promise<number> {
    return this.Invoke<number>("ProdGetLimit", prodId);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 1.1.0
   * @liveSafe
   */
  public static async ComboItem(prodId: number, pLog: Logger): Promise<IComboItem[]> {
    const log = pLog.With(...this.Log, "Combo");

    const list = await this.ComboList(prodId);
    const items: IComboItem[] = [];

    for (const comboId of list) {
      const combo = await this.Combo(comboId);

      const variType: Record<string, string> = {};

      for (const typeId of combo.Types) {
        const type = await this.Type(typeId);

        if (!type) {
          log.error(`[Mismatch] Type ${typeId} not found. Combo ${comboId} : Product ${prodId}`);
          continue;
        }

        const vari = await this.Variant(type.VariantId);

        if (!vari) {
          log.error(`[Mismatch] Variant ${type.VariantId} not found. Combo ${comboId} : Type ${typeId} : Product ${prodId}`);
          continue;
        }

        variType[vari.Name] = type.Name;
      }

      items.push({
        Id: comboId,
        Stock: combo.Stock,
        Combo: variType,
      });
    }

    return items;
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 1.0.0
   * @liveSafe
   */
  public static ComboList(prodId: number): Promise<number[]> {
    return this.GetTimeCache(prodId, "ProductGetComboList", (x) => x.add(1, "m"), prodId);
  }

  public static readonly photoList = "ProductGetPhotoList";
  /**
   * @author Aloento
   * @since 1.0.0
   * @version 1.1.0
   * @liveSafe
   * @deprecated Use {@link usePhotoList} if possible.
   */
  public static async PhotoList(prodId: number, pLog: Logger) {
    const log = pLog.With(...this.Log, "PhotoList");
    const ids = await this.GetTimeCache<number[]>(prodId, this.photoList, (x) => x, prodId).catch(log.error);
    return this.makePhotoList(prodId, ids || [], log);
  }

  private static async makePhotoList(prodId: number, ids: number[], log: Logger): Promise<[ProductData.Photo[], string]> {
    let list = [];
    let cover = "";

    for (const photoId of ids) {
      const photo = await this.Photo(photoId).catch(log.error);

      if (photo) {
        list.push(photo);

        if (photo.Cover)
          cover = photo.ObjectId;
      } else
        log.warn(`Photo ${photoId} not found in Product ${prodId}`);
    }

    list = list.sort((a, b) => a.Order - b.Order);

    if (!cover && list.length > 0) {
      log.warn(`Product ${prodId} has no cover photo, using first photo instead`);
      return [list, list[0].ObjectId];
    }

    return [list, cover];
  }

  /**
   * @author Aloento
   * @since 1.4.0
   * @version 0.1.0
   */
  public static usePhotoList(prodId: number, pLog: Logger) {
    const log = useConst(() => pLog.With(...this.Log, "PhotoList"));
    const [list, setList] = useState<ProductData.Photo[]>();
    const [cover, setCover] = useState<string>();

    const req = this.useTimeCache<number[]>(prodId, this.photoList, {
      defaultParams: [prodId],
      onError: log.error,
    });

    useAsyncEffect(async () => {
      const ids = req.data;
      if (!ids)
        return;

      const [list, cover] = await this.makePhotoList(prodId, ids, log);
      setList(list);
      setCover(cover);
    }, [req.data]);

    return {
      ...req,
      data: [list, cover] as const
    }
  }
}
