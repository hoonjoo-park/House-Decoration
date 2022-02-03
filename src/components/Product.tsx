import { ProductType } from 'constants/';
import React from 'react';
import styled from 'styled-components';
import { Badge } from 'images';
type Props = {
  product: ProductType;
  currentProduct: string;
  setCurrentProduct: (item: any) => void;
};

export const Product = ({
  product,
  currentProduct,
  setCurrentProduct,
}: Props) => {
  return (
    <ProductBox bg={product.imageUrl}>
      {product.discountRate > 0 && (
        <DiscountBox>
          <img src={Badge} alt='badge' />
          <span>30%</span>
        </DiscountBox>
      )}
    </ProductBox>
  );
};

const ProductBox = styled.div<{ bg: string }>`
  flex-shrink: 0;
  width: 6rem;
  height: 6rem;
  border: 0.5px solid #aaafb9;
  border-radius: 5px;
  margin: 0 0.5rem;
  background-image: ${(props) => `url(${props.bg})`};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
const DiscountBox = styled.div`
  position: relative;
  width: 1.5rem;
  margin-right: 5px;
  margin-left: auto;
  img {
    width: 1.5rem;
  }
  span {
    position: absolute;
    font-size: 5px;
    color: #ffffff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -70%);
  }
`;
