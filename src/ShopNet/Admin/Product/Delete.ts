import { useRequest } from "ahooks";
import { Options } from "ahooks/lib/useRequest/src/types";
import { ProductData } from "~/ShopNet/Product/Data";
import { AdminNet } from "../AdminNet";
import { AdminProductGet } from "./Get";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export abstract class AdminProductDelete extends AdminNet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.3.0
   */
  public static usePhoto(options: Options<true, [number, number]>) {
    return useRequest(async (prodId, photoId) => {
      const res = await this.Invoke<boolean>("ProductDeletePhoto", photoId);
      this.EnsureTrue(res);
      return res;
    }, options);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.2.0
   */
  public static useVariant(options: Options<true, [number]>) {
    return useRequest(async variantId => {
      const res = await this.Invoke<boolean>("ProductDeleteVariant", variantId);
      this.EnsureTrue(res);
      return res;
    }, options);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.2.0
   */
  public static useType(options: Options<true, [number, string]>) {
    return useRequest(async (variantId, type) => {
      const res = await this.Invoke<boolean>("ProductDeleteType", variantId, type);
      this.EnsureTrue(res);
      return res;
    }, options);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.2.0
   */
  public static useCombo(options: Options<true, [number]>) {
    return useRequest(async comboId => {
      const res = await this.Invoke<boolean>("ProductDeleteCombo", comboId);
      this.EnsureTrue(res);
      return res;
    }, options);
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.2.1
   */
  public static useProduct(options: Options<true, [number]>) {
    return useRequest(async prodId => {
      const res = await this.Invoke<boolean>("ProductDeleteProduct", prodId);
      this.EnsureTrue(res);

      AdminProductGet.ListUpdate(x => x!.filter(x => x !== prodId));

      return res;
    }, options);
  }

  /**
   * @author Aloento
   * @since 1.0.0
   * @version 0.1.0
   */
  public static useCategory(options: Options<true, [number]>) {
    return useRequest(async prodId => {
      const res = await this.Invoke<boolean>("ProductDetachCategory", prodId);
      this.EnsureTrue(res);

      ProductData.ProductUpdate(prodId, x => {
        x.Category = undefined;
        return x;
      });

      return res;
    }, options);
  }
}
