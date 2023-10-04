import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle } from "@fluentui/react-components/unstable";
import { DismissRegular, OpenRegular } from "@fluentui/react-icons";
import { useBoolean, useMount } from "ahooks";
import { useRouter } from "~/Components/Router";
import { ColFlex } from "~/Helpers/Styles";
import { AdminProductCombo } from "./Combo";
import { AdminProductName } from "./Name";
import { AdminProductPhoto } from "./Photo";
import { AdminProductVariant } from "./Variant";

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
const useStyles = makeStyles({
  body: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalXL
  },
});

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.2.0
 */
export function AdminProductDetail({ ProdId }: { ProdId: number }) {
  const style = useStyles();
  const [open, { toggle, setTrue }] = useBoolean();
  const { Nav, Paths } = useRouter();

  useMount(() => {
    if (parseInt(Paths.at(1)!) === ProdId)
      setTrue();
  });

  return <>
    <Button
      appearance="subtle"
      icon={<OpenRegular />}
      onClick={() => {
        Nav(`/Admin/${ProdId}`);
        setTrue();
      }}
    />

    <Drawer
      open={open}
      onOpenChange={toggle}
      position="end"
      size="large"
      modalType="alert"
    >
      <DrawerHeader>
        <DrawerHeaderTitle action={
          <Button
            appearance="subtle"
            icon={<DismissRegular />}
            onClick={() => {
              Nav(`/Admin`);
              toggle();
            }}
          />}
        >
          Product Detail
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody className={style.body}>
        <AdminProductName ProdId={ProdId} />
        <AdminProductPhoto ProdId={ProdId} />
        <AdminProductVariant ProdId={ProdId} />
        <AdminProductCombo ProdId={ProdId} />
      </DrawerBody>
    </Drawer>
  </>
}
