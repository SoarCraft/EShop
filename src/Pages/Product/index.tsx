import { Divider, LargeTitle, SpinButton, Title3, makeStyles, tokens } from "@fluentui/react-components";
import { useRequest } from "ahooks";
import { useState } from "react";
import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "~/Components/Router";
import { Dic } from "~/Helpers/Dic";
import { Logger } from "~/Helpers/Logger";
import { BaseCard, Col, ColFlex, Flex } from "~/Helpers/Styles";
import { useLimit } from "~/Helpers/useLimit";
import { Hub } from "~/ShopNet";
import { IComboItem } from "../Admin/Product/Combo";
import { ProductAddCart } from "./AddCart";
import { ProductCarousel } from "./Carousel";
import { RadioGroupContext } from "./Context";
import { ProductRadioList } from "./RadioGroup";

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
const useStyle = makeStyles({
  main: ColFlex,
  info: {
    ...Flex,
    columnGap: tokens.spacingHorizontalXXXL
  },
  detail: {
    ...BaseCard,
    ...Col,
    height: "fit-content",
    flexBasis: "50%",
    flexShrink: 0,
    rowGap: tokens.spacingVerticalXL,
    paddingTop: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalXXL,
    paddingRight: tokens.spacingHorizontalXXL,
    paddingBottom: tokens.spacingHorizontalXXL
  },
  fore: {
    color: tokens.colorBrandForeground1
  },
  quan: {
    ...ColFlex,
    rowGap: tokens.spacingVerticalS,
  },
  add: {
    ...Flex,
    justifyContent: "space-between",
    columnGap: tokens.spacingHorizontalM
  },
})

/**
 * @author Aloento
 * @since 0.5.0
 * @version 0.1.0
 */
export interface IProduct {
  Name: string;
  Combos: Omit<IComboItem, "Id">[];
}

const log = new Logger("Product");

/**
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.5
 */
function Product() {
  const style = useStyle();
  const { Nav, Paths } = useRouter();
  const id = parseInt(Paths.at(1)!);

  const { data } = useRequest(() => Hub.Product.Get.Basic(id, log), {
    onBefore() {
      isNaN(id) && Nav("/");
    },
    onError(e) {
      Nav("/");
      log.error(e);
    }
  });

  const [_, max] = useLimit(id);
  const [quantity, setQuantity] = useState(1);

  return (
    <RadioGroupContext>
      <Helmet>
        <title>{`${data?.Name} - ${Dic.Name}`}</title>
      </Helmet>

      <div className={style.main}>
        <div className={style.info}>
          <ProductCarousel Id={id} />

          <div className={style.detail}>
            <LargeTitle className={style.fore}>
              {data?.Name}
            </LargeTitle>

            <Divider />

            <ProductRadioList ProdId={id} />

            <Divider />

            <div className={style.quan}>
              <Title3 className={style.fore}>
                QUANTITY
              </Title3>

              <div className={style.add}>
                <SpinButton
                  appearance="underline"
                  value={quantity}
                  min={1}
                  max={max}
                  onChange={(_, val) => setQuantity(val.value!)}
                />

                <ProductAddCart
                  ProdId={id}
                  Quantity={quantity}
                />
              </div>
            </div>

          </div>
        </div>

        {/* <ProductLexicalRender ProdId={id} /> */}
      </div>
    </RadioGroupContext>
  )
}

/** @deprecated */
export default Product;
