import { useMsal } from "@azure/msal-react";
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Input, Label, Toast, ToastBody, ToastTitle, makeStyles, tokens } from "@fluentui/react-components";
import { useEffect, useState } from "react";
import { Logger } from "~/Helpers/Logger";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { useErrorToast } from "~/Helpers/useToast";
import { Hub } from "~/ShopNet";
import { OnNewUserSubject } from "./NewUser";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
interface ISetting {
  Open: boolean;
  Toggle: () => void;
  New?: true;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  box: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalM
  },
  one: {
    ...Flex,
    columnGap: tokens.spacingVerticalXXXL
  },
});

const log = new Logger("Setting");

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.5.0
 */
export function Setting({ Open, Toggle, New }: ISetting) {
  const style = useStyles();
  const claim = useMsal().instance.getActiveAccount();

  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [address, setAddress] = useState<string>();

  const data = Hub.User.Get.useMe(log);

  useEffect(() => {
    if (New || !data) return;

    const { Name, Phone, Address } = data;

    setName(Name);
    setPhone(Phone);
    setAddress(Address);
  }, [data]);

  const { dispatch, dispatchToast } = useErrorToast(log);

  const { run } = Hub.User.Post.useUpdate({
    manual: true,
    onError(e, [req]) {
      dispatch({
        Message: `Failed ${New ? "Create" : "Update"} Info`,
        Error: e,
        Request: req
      });
    },
    onSuccess(_, [req]) {
      dispatchToast(
        <Toast>
          <ToastTitle>Info {New ? "Created" : "Updated"}</ToastTitle>
          <ToastBody>
            {req.Name}
            <br />
            {req.Phone}
            <br />
            {req.Address}
          </ToastBody>
        </Toast>,
        { intent: "success" }
      );

      if (New) {
        OnNewUserSubject.next(false);
        OnNewUserSubject.complete();
        OnNewUserSubject.closed = true;
      }

      Toggle();
    },
  });

  return (
    <Dialog open={Open} onOpenChange={Toggle} modalType={New ? "alert" : "modal"}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>{New ? "Welcome! Fill in your info to get started." : "Personal Information"}</DialogTitle>

          <DialogContent className={style.box}>
            <div className={style.one}>
              <Field label="Name" size="large" required>
                <Input size="medium" value={name} maxLength={20} onChange={(_, v) => setName(v.value)} />
              </Field>

              <Field label="Phone" size="large" required>
                <Input size="medium" value={phone} maxLength={20} onChange={(_, v) => setPhone(v.value)} />
              </Field>
            </div>

            <Field label="E-Mail" size="large">
              <Label>{claim?.username}</Label>
            </Field>

            <Field label="Address" size="large" required>
              <Input size="medium" value={address} maxLength={100} minLength={20} onChange={(_, v) => setAddress(v.value)} />
            </Field>
          </DialogContent>

          <DialogActions>
            {!New && (
              <DialogTrigger disableButtonEnhancement>
                <Button appearance="secondary">Cancel</Button>
              </DialogTrigger>
            )}

            <Button appearance="primary" onClick={() => run({
              EMail: claim?.username,
              Name: name,
              Address: address,
              Phone: phone
            })}>
              Submit
            </Button>
          </DialogActions>

        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
