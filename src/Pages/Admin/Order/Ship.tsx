import { Button, Field, Input, Toast, ToastTitle } from "@fluentui/react-components";
import { EditRegular, SendRegular } from "@fluentui/react-icons";
import { useBoolean, useRequest } from "ahooks";
import { useState } from "react";
import { useErrorToast } from "~/Helpers/useToast";
import { Hub } from "~/ShopNet";
import { AdminHub } from "~/ShopNet/Admin";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.1
 */
export function Shipment({ OrderId, Refresh }: { OrderId: number; Refresh: (id: number) => void }) {
  const [edit, { setTrue, setFalse }] = useBoolean();
  const [track, setTrack] = useState("");

  const { dispatch, dispatchToast } = useErrorToast();

  useRequest(() => Hub.Order.Get.Order(OrderId), {
    onSuccess(data) {
      setTrack(data?.TrackingNumber!);
    }
  });

  const { run } = useRequest(AdminHub.Order.Post.Ship.bind(AdminHub.Order.Post), {
    manual: true,
    onFinally(req, _, e) {
      if (e)
        return dispatch({
          Message: "Failed Update Tracking Number",
          Request: req,
          Error: e
        });

      dispatchToast(
        <Toast>
          <ToastTitle>Tracking Number Updated</ToastTitle>
        </Toast>,
        { intent: "success" }
      );

      setFalse();
      Refresh(OrderId);
    },
  });

  return (
    <Field label="Shipment" size="large">
      <Input
        value={track}
        disabled={!edit}
        appearance="underline"
        onChange={(_, v) => setTrack(v.value)}
        placeholder="Fill in this field to ship the order."
        contentAfter={edit
          ? <Button appearance="subtle" icon={<SendRegular />} onClick={() => run(OrderId, track)} />
          : <Button appearance="subtle" icon={<EditRegular />} onClick={setTrue} />}
      />
    </Field>
  );
}
