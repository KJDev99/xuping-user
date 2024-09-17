import React, { useState } from "react";
import {
  Card,
  ImageContainer,
  Wrapper,
  ButtonWrapper,
  ViewAllButton,
} from "./style";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/shared/modules/category";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { CatalogSkeleton } from "../catalog-skeleton";
import { useTranslation } from "next-i18next";
import { CatalogDrawer } from "../catalog-drawer"; // CatalogDrawer komponentini import qildik
import { Container } from "@/styles/global";

export const Catalog = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false); // Drawer uchun holat qo‘shildi

  const { data: catalog = [], isLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_CATALOG_LIST],
    queryFn: getCategory,
    select: (res) => {
      return res.data;
    },
  });

  const itemsToShow = catalog.slice(0, 6);

  return (
    <Wrapper>
      <Container>
        <div className="katalog_main">
          <div className="test">
            {itemsToShow.map((item: any) => (
              <Card
                key={item.id}
                onClick={() => router.push(`/categories/${item.id}`)}
              >
                <ImageContainer>
                  {item?.photo == null ? null : (
                    <Image
                      src={item?.photo}
                      alt={item.name_uz}
                      priority
                      width={24}
                      height={24}
                    />
                  )}
                </ImageContainer>
                <p>{router.locale == "ru" ? item?.name_ru : item?.name_uz}</p>
              </Card>
            ))}
          </div>

          <ButtonWrapper>
            <ViewAllButton onClick={() => setIsOpen(true)}>
              {t("Barchasini ko’rish")}
            </ViewAllButton>
          </ButtonWrapper>

          <CatalogDrawer open={isOpen} setOpen={setIsOpen} />
        </div>
      </Container>
    </Wrapper>
  );
};
