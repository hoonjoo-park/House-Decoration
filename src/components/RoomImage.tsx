import { ProductType } from 'constants/';
import React from 'react';
import styled from 'styled-components';
import { ToolTip } from './ToolTip';

interface Props {
  apiData: { id: number; imageUrl: string; productList: ProductType[] };
  currentProduct: number;
  setCurrentProduct: (item: any) => void;
}

export const RoomImage = ({
  apiData,
  currentProduct,
  setCurrentProduct,
}: Props) => {
  return (
    <ImageContainer>
      <MainImage src={apiData.imageUrl} alt='img' />
      {apiData.productList.map((list, i) => (
        <ToolTip
          key={i * 99}
          product={list}
          currentProduct={currentProduct}
          setCurrentProduct={setCurrentProduct}
        />
      ))}
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  flex-shrink: 0;
  display: flex;
  width: 100%;
  min-height: 40rem;
  border-radius: 5px;
`;
const MainImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
`;
