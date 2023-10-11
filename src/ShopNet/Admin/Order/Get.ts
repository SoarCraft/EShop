import { IOrderItem } from "~/Pages/History";
import { AdminNet } from "../AdminNet";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export class AdminOrderGet extends AdminNet {
  /**
   * @author Aloento
   * @since 0.5.0
   * @version 0.1.0
   */
  public static async List(): Promise<IOrderItem[]> {
    return [
      {
        Id: 1,
        Items: ["OTC SHIRT - GREY", "OTC Cap - Cap and Cap"],
        Quantity: 2,
        OrderDate: new Date(),
        TrackNumber: "Number123456789",
        Status: "Finished"
      },
      {
        Id: 2,
        Items: ["OTC Cap - Cap and Cap"],
        Quantity: 1,
        OrderDate: new Date(),
        TrackNumber: "Number123456789",
        Status: "Finished"
      },
    ];
  }
}
