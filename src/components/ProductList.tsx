import { ProductType } from 'constants/';
import React from 'react';
import styled from 'styled-components';
import { Product } from './Product';

interface Props {
  apiData: {
    id: number;
    imageUrl: string;
    productList: ProductType[];
  };
  currentProduct: string;
  setCurrentProduct: (product: any) => void;
}

export const ProductList = ({
  apiData,
  currentProduct,
  setCurrentProduct,
}: Props) => {
  console.log(apiData);
  return (
    <ListContainer>
      {apiData.productList.map((list) => (
        <Product
          key={list.productId}
          product={list}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  width: 100%;
  height: 8rem;
  border-radius: 0 0 5px 5px;
`;
