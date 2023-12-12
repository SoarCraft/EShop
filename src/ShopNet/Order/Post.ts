import { useRequest } from "ahooks";
import { Options } from "ahooks/lib/useRequest/src/types";
import { ICartItem } from "~/Components/ShopCart";
import { ShopNet } from "../ShopNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export abstract class OrderPost extends ShopNet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.3.0
   */
  public static useNew(options: Options<number, [ICartItem[], string | undefined]>) {
    return useRequest((cart, cmt) => {
      this.EnsureLogin();

      const req = cart.map(x => {
        return {
          ProdId: x.ProdId,
          Type: Object.values(x.Type),
          Quantity: x.Quantity,
        };
      });

      return this.Invoke("OrderPostNew", req, cmt);
    }, options);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.2.0
   */
  public static useAppend(options: Options<true, [number, string]>) {
    return useRequest((orderId, cmt) => {
      this.EnsureLogin();
      return this.Invoke("OrderPostAppend", orderId, cmt);
    }, options);
  }

  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.2.0
   */
  public static useCancel(options: Options<true, [number, string]>) {
    return useRequest((orderId, reason) => {
      this.EnsureLogin();
      return this.Invoke("OrderPostCancel", orderId, reason);
    }, options);
  }
}
