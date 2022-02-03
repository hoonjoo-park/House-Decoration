import { ProductType } from 'constants/';
import React from 'react';
import styled from 'styled-components';

type Props = {
  product: ProductType;
};

export const Product = ({ product }: Props) => {
  return <ProductBox bg={product.imageUrl}></ProductBox>;
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
