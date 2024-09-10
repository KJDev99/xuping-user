import { Container, Wrapper } from "@/styles/global";
import { Button, Grid, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import {
  AddToCart,
  Body,
  Footer,
  Header,
  Info,
  LeftContent,
  Parameters,
  RatingUI,
  RightContent,
  Title,
} from "./style";
import CarouselDetails from "@/components/carousel/carousel.details";
import { Rating } from "@mantine/core";
import { Colors } from "./components/colors";
import { HeartIcon } from "@/assets/icons/heart";
import { SupplierIcon } from "@/assets/icons/supplier";
import { ActiveCartIcon } from "@/assets/icons/active.cart";
// import Link from 'next/link';
import { usePage } from "./usePage";
import useStore from "@/store";
import { IProduct } from "@/types/product";
import { useRouter } from "next/router";
import { Loader } from "@/components/loader";
import { BottomNavigator } from "@/components/footer/bottom.navigator";
import { NumberFormat } from "@/components/number-format";
import { useTranslation } from "next-i18next";
import { CustomBox } from "./components/box";
import { colors, colors2 } from "./constants";
import { IconHeartFilled } from "@/assets/icons/card/heart.filled";
import { HeartOutlineIcon } from "@/assets/icons/heart.outline";
import { SimilarProducts } from "./components/similar-products";
import toast from "react-hot-toast";
// import { CustomBox } from './components/box';

const ProductScreen = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const {
    slug,
    data,
    images,
    active,
    active1,
    attributes,
    isLoading,
    setActive,
    setActive1,
  } = usePage();
  const [checked, setChecked] = useState(false);
  const cart = useStore((state: any) => state.cart);
  const addCart = useStore((state: any) => state.addToCart);
  const [boxList, setBoxList] = useState<any>([]);
  const addToWishList = useStore((state: any) => state.addToWishList);
  const removeWishList = useStore((state: any) => state.removeWishList);
  const wishlist = useStore((state: any) => state.wishlist);
  const [atributErr, setAtributErr] = useState<any>(false);

  const addToCart = () => {
    const media = data?.media[0]?.file;
    cart?.find((v: IProduct) => v.id == Number(slug))
      ? router.push("/cart")
      : !!boxList?.find((v: any) => v?.selected)
      ? addCart({
          ...data,
          media,
          // color: active,
          attributes: Object.values(active),

          box: boxList?.find((v: any) => v?.selected)?.id,
        })
      : addCart({
          ...data,
          media,
          // color: active,
          attributes: Object.values(active),
        });
  };

  const handleOrder = () => {
    if (active) {
      addToCart();
      router.push("/cart");
    } else {
      setAtributErr(true);
    }
  };

  const handleAddWishlist = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!checked) {
      addToWishList(data);
    } else {
      removeWishList(data?.id);
    }
  };

  useEffect(() => {
    if (wishlist?.find((v: any) => v.id == data?.id)?.hasWishList) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [wishlist, data?.id]);

  console.log(attributes, "data");

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="product-slug-container">
          <Grid>
            <Grid.Col lg={4} md={6} sm={12} xs={12} span={12}>
              <>
                <LeftContent>
                  <CarouselDetails images={images} />
                </LeftContent>
                <CustomBox boxes={data?.boxes} setBoxList={setBoxList} />
              </>
            </Grid.Col>
            <Grid.Col lg={5} md={6} sm={12} xs={12} span={12}>
              <Container>
                <RightContent>
                  <Title>
                    {router.locale === "uz" ? data?.name_uz : data?.name_ru}
                  </Title>
                  {console.log(`item`, active)}
                  {attributes?.attributes?.map((item: any, index: number) => {
                    return (
                      <>
                        <Colors
                          name={item?.[`name_uz`]}
                          colors={item?.value}
                          setActive={setActive}
                          active={active}
                          index={index}
                          atributErr={atributErr}
                          setAtributErr={setAtributErr}
                        />
                      </>
                    );
                  })}
                  <Parameters>
                    <Text className="desc-title">Tavsif</Text>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html: data[`desc_${router.locale}`],
                      }}
                    />
                  </Parameters>
                </RightContent>
              </Container>
            </Grid.Col>
            <Grid.Col lg={3} md={6} sm={12} xs={12} span={12}>
              <Container className="add-to-cart-container">
                <AddToCart>
                  <Header>
                    <Title>
                      <NumberFormat value={data?.price} />{" "}
                      {router.locale === "uz" ? "so‘m" : "сум"}
                      <br />
                      {/* <del style={{ fontSize: 15, color: "#8d8d8d" }}>
                        <NumberFormat value={data?.sale_price ?? 0} />
                      </del>{" "} */}
                      {/* <span style={{ fontSize: 15, color: "#8d8d8d" }}>
                        {router.locale === "uz" ? "so‘m" : "сум"}
                      </span> */}
                    </Title>
                    {/* <HeartIcon /> */}
                    <div
                      className="heart-wrapper"
                      onClick={(e: any) => {
                        setChecked(!checked);
                        handleAddWishlist(e);
                      }}
                    >
                      {checked ? <IconHeartFilled /> : <HeartOutlineIcon />}
                    </div>
                  </Header>
                  <Body>
                    <div>
                      <SupplierIcon />
                    </div>
                    <Info>
                      <p>{t("slug.address delivery")}</p>
                    </Info>
                  </Body>
                  <Footer>
                    {cart?.find((v: IProduct) => v.id == Number(slug)) ? (
                      <Stack>
                        <Button
                              onClick={() => {
                            if (active) {
                              addToCart();
                            } else {
                              setAtributErr(true);
                            }
                          }}
                          variant="outline"
                          style={{
                            fontFamily: "var(--font-readex)",
                            border: "1px solid var(--main-bg-color)",
                            color: "var(--main-bg-color)",
                          }}
                        >
                          {t("slug.in cart")}
                        </Button>
                        <Button
                          color="red"
                          onClick={handleOrder}
                          variant="filled"
                          style={{ fontFamily: "var(--font-readex)" }}
                        >
                          {t("place an order")}
                        </Button>
                      </Stack>
                    ) : (
                      <Stack>
                        <Button
                          onClick={() => {
                            if (active) {
                              addToCart();
                            } else {
                              setAtributErr(true);
                            }
                          }}
                          variant="outline"
                          style={{
                            fontFamily: "var(--font-readex)",
                            border: "1px solid var(--main-bg-color)",
                            color: "var(--main-bg-color)",
                          }}
                        >
                          {t("slug.add to cart")}
                        </Button>
                        <Button
                          color="red"
                          onClick={handleOrder}
                          variant="filled"
                          style={{ fontFamily: "var(--font-readex)" }}
                        >
                          {t("place an order")}
                        </Button>
                      </Stack>
                    )}
                  </Footer>
                </AddToCart>
              </Container>
            </Grid.Col>
          </Grid>
          <SimilarProducts item={data} />
        </Container>
      )}
      <BottomNavigator id={slug} data={data} />
    </Wrapper>
  );
};

export default ProductScreen;
