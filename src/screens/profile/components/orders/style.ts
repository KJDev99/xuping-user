import styled from "@emotion/styled";

export const MyOrdersProvider = styled("div")`
  .empty-cart {
    width: 60%;
    margin: 50px auto;
    .empty-cart-image {
      width: 80%;
      height: auto;
    }
  }

  @media (max-width: 576px) {
    .empty-cart {
      width: 100%;
      margin: 100px auto 0 auto;
      .empty-cart-image {
        width: 100%;
      }
    }
  }
`;

export const OrderCard = styled("div")`
  width: 100%;
  min-height: auto;
  margin: 8px 0;
  border-radius: 20px;
  border: 1px solid var(--main-bg-color);
  background: #fff;
  padding: 21px 0 0 0;
  overflow: hidden;
`;
export const OrderCardHeader = styled("div")`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin: 0 32px;
  padding: 4px 0;
  & h2 {
    font-size: 18px;
    opacity: 0.87;
  }
`;
export const OrderCardBody = styled.div`
  width: 100%;
  padding: 4px 0;
  margin: 0 32px;
  display: flex;
  gap: 6px;

  & .order-body-left {
    width: 25%;
    & li {
      list-style: none;
      font-size: 14px;
      font-family: var(--font-readex);
      opacity: 0.87;
      line-height: 2;
    }
  }
  & .order-body-right {
    width: 75%;
    & li {
      list-style: none;
      font-size: 14px;
      font-family: var(--font-readex);
      line-height: 2;
      & .status {
        font-size: 12px;
        opacity: 0.87;
        color: #009ef7;
        background-color: #f1faff;
        padding: 4px 6px;
        border-radius: 0.425rem;
      }
    }
  }
  @media (max-width: 576px) {
    display: flex;
    justify-content: space-between;
    & .order-body-right,
    & .order-body-left {
      width: 50%;
      & li {
        font-size: 12px;
        line-height: 1.8;
      }
    }
  }
`;

export const OrderCardFooter = styled.div`
  & .product-items {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    &:last-of-type {
      border-bottom: none;
    }
    & .product-items-left {
      width: 65%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .product-items-info {
        display: flex;
        flex-direction: column;
        & .element-info {
          display: flex;
          align-items: center;
          gap: 24px;
          & p {
            font-size: 14px;
            opacity: 0.87;
            line-height: 2;
            width: 120px;
            font-family: var(--font-readex);

            &.product-items-p {
              opacity: 1;
              font-weight: 600;
              line-height: 1.5;
              width: 200px;
              font-family: var(--font-readex);
            }
          }
        }
      }
    }
    & .product-items-right {
      width: 35%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      & .status {
        font-size: 12px;
        opacity: 0.87;
        color: #009ef7;
        background-color: #f1faff;
        padding: 4px 6px;
        border-radius: 0.425rem;
      }
    }
  }
  & .MuiPaper-elevation {
    border: none;
  }
  & .image-container {
    width: 80px !important;
    height: 80px;
    position: relative;
    user-select: none;
    & .image-next {
      width: 80px !important;
      height: 100%;
      position: unset !important;
      object-fit: contain;
      max-height: 124px;
    }
  }

  @media (max-width: 576px) {
    & .product-items {
      flex-direction: column-reverse;

      & .product-items-right {
        width: 100%;
        align-items: flex-start;
        margin-bottom: 12px;
      }
      & .product-items-left {
        width: 100%;
        & .product-items-info {
          & .element-info {
            justify-content: space-between;
            & p {
              font-size: 12px;
              width: auto;
              &.product-items-p {
                width: 150px;
              }
            }
          }
        }
      }
    }
    & .image-container {
      display: none;
    }
  }
`;
