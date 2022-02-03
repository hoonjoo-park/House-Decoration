import { ProductType } from 'constants/';
import React from 'react';
import styled from 'styled-components';
import { Badge } from 'images';
type Props = {
  product: ProductType;
  currentProduct: number;
  setCurrentProduct: (item: any) => void;
};

export const Product = ({
  product,
  currentProduct,
  setCurrentProduct,
}: Props) => {
  const handleClick = () => {
    if (product.productId === currentProduct) {
      setCurrentProduct(0);
      return;
    }
    setCurrentProduct(product.productId);
  };
  return (
    <ProductBox
      className={product.productId === currentProduct ? 'active' : ''}
      onClick={handleClick}
    >
      <img draggable='false' src={product.imageUrl} alt='productImage' />
      {product.discountRate > 0 && (
        <DiscountBox>
          <img src={Badge} alt='badge' />
          <span>{product.discountRate}%</span>
        </DiscountBox>
      )}
    </ProductBox>
  );
};

const ProductBox = styled.li`
  position: relative;
  flex-shrink: 0;
  width: 6rem;
  height: 6rem;
  border-radius: 5px;
  margin: 0 0.5rem;
  cursor: pointer;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    border: 0.5px solid #aaafb9;
  }
  &.active {
    background: linear-gradient(to bottom, #f86940 0%, #fc6685 100%);
  }
  &.active > img {
    border: 2px solid transparent;
  }
`;
const DiscountBox = styled.div`
  position: absolute;
  width: 1.5rem;
  top: 0;
  right: 5px;
  & > img {
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
