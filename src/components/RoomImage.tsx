import { ProductType } from 'constants/';
import React from 'react';
import styled from 'styled-components';
import { ToggleBox } from './ToggleBox';
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
      <img src={apiData.imageUrl} alt='img' />
      {apiData.productList.map((list, i) => (
        <>
          <ToolTip
            key={list.productId}
            product={list}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
          />
        </>
      ))}
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 5px;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }
`;
