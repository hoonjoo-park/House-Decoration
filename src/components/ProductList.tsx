import { ProductType, PRODUCT_MARGIN, PRODUCT_WIDTH } from 'constants/';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Product } from './Product';

interface Props {
  apiData: {
    id: number;
    imageUrl: string;
    productList: ProductType[];
  };
  currentProduct: number;
  setCurrentProduct: (product: any) => void;
}

export const ProductList = ({
  apiData,
  currentProduct,
  setCurrentProduct,
}: Props) => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const index =
      currentProduct === 0
        ? 0
        : apiData.productList.findIndex(
            (el) => el['productId'] === currentProduct
          );
    const middleIndex = Math.floor(apiData.productList.length / 2) - 1;
    const distance =
      index >= middleIndex
        ? (PRODUCT_MARGIN + PRODUCT_WIDTH) * middleIndex
        : (PRODUCT_MARGIN + PRODUCT_WIDTH) * index;
    setDistance(distance);
  }, [apiData.productList, currentProduct]);

  return (
    <ListContainer>
      <ListUl distance={distance}>
        {apiData.productList.map((list) => (
          <Product
            key={list.productId}
            product={list}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
          />
        ))}
      </ListUl>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
  height: 8rem;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
`;

const ListUl = styled.ul<{ distance: number }>`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => `translateX(-${props.distance}rem)`};
`;
