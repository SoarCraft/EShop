import { Title3, ToggleButton, makeStyles, shorthands, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { useMemo } from "react";
import { ColFlex, Flex } from "~/Helpers/Styles";
import { Hub } from "~/ShopNet";
import { useRadioGroup } from "./Context";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const useStyle = makeStyles({
  fore: {
    color: tokens.colorBrandForeground1,
    textTransform: "uppercase"
  },
  btn: shorthands.borderColor(tokens.colorBrandForeground1),
  vari: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalS,
  },
  radio: {
    ...Flex,
    flexWrap: "wrap",
    rowGap: tokens.spacingHorizontalS,
    columnGap: tokens.spacingHorizontalM
  }
})

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.1
 */
export function ProductRadioList({ ProdId }: { ProdId: number }) {
  const { data } = useRequest(Hub.Product.Get.Combo, {
    defaultParams: [ProdId],
  });

  const { Update } = useRadioGroup();

  const variants = useMemo(() => {
    if (!data) return {};

    const variant: Record<string, Set<string>> = {};
    const cur: Record<string, string> = {};

    for (const i of data)
      for (const c of i.Combo)
        if (variant.hasOwnProperty(c.Variant))
          variant[c.Variant].add(c.Type);
        else {
          variant[c.Variant] = new Set([c.Type]);
          cur[c.Variant] = c.Type;
        }

    Update(cur);
    return variant;
  }, [data]);

  return Object.keys(variants).map((val, i) => <VariRadioGroup key={i} Variant={val} Types={variants[val]} />);
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
interface IVariRadioGroup {
  Variant: string;
  Types: Set<string>;
}

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.2.0
 */
function VariRadioGroup({ Variant, Types }: IVariRadioGroup) {
  const style = useStyle();
  const { Current, Update } = useRadioGroup();

  return (
    <div className={style.vari}>
      <Title3 className={style.fore}>
        SELECT {Variant}: SHORT SLEEVE
      </Title3>

      <div className={style.radio}>
        {Array.from(Types).map((val, i) =>
          <ToggleButton
            key={i}
            appearance="outline"
            className={style.btn}
            checked={Current[Variant] === val}
            onClick={() => Update({
              ...Current,
              [Variant]: val
            })}
          >
            {val}
          </ToggleButton>)}
      </div>
    </div>
  );
}
