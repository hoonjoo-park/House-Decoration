import { IMAGE_HEIGHT, IMAGE_WIDTH, ProductType, TOOLTIP } from 'constants/';
import React from 'react';
import styled from 'styled-components';

interface Props {
  product: ProductType;
  pointX: number;
  pointY: number;
  currentProduct: number;
}

export const ToggleBox = ({
  product,
  currentProduct,
  pointX,
  pointY,
}: Props) => {
  const priceWithComma = product.priceDiscount.toLocaleString('en', {
    maximumFractionDigits: 3,
  });
  const tsY =
    pointX < IMAGE_HEIGHT / 2 ? TOOLTIP.height + 0.2 + 'rem' : '-105%';
  const tsX =
    pointY < IMAGE_WIDTH / 2 ? 0 : `calc(-100% + ${TOOLTIP.width}rem)`;
  return (
    <ToggleContainer
      className={product.productId === currentProduct ? 'active' : ''}
      x={pointX}
      y={pointY}
      tsX={tsX}
      tsY={tsY}
    >
      <ToggleImage src={product.imageUrl} alt='toggleImage' />
      <RightBox>
        <ProductTitle>{product.productName}</ProductTitle>
        <PriceBox>
          <span className={product.outside ? 'outside' : ''}>
            {product.outside ? '예상가' : product.discountRate + '%'}
          </span>
          <h4>{priceWithComma}</h4>
        </PriceBox>
      </RightBox>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div<{
  x: number;
  y: number;
  tsX: string | number;
  tsY: string | number;
}>`
  display: none;
  position: absolute;
  width: 14rem;
  height: 6rem;
  padding: 0.5em;
  background-color: #ffffff;
  border-radius: 10px;
  left: ${(props) => props.y * 1.27}px;
  top: ${(props) => props.x * 1.1}px;
  transform: ${(props) => `translate(${props.tsX}, ${props.tsY})`};
  z-index: 5;
  &.active {
    display: flex;
  }
`;
const ToggleImage = styled.img`
  width: 5rem;
  height: 100%;
  border-radius: 10px;
  margin-right: 0.5rem;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  width: 5rem;
  overflow-x: hidden;
`;
const ProductTitle = styled.h3`
  overflow: hidden;
  font-size: 15px;
`;
const PriceBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  & > span {
    margin-right: 0.5rem;
    color: #ff585d;
  }
  & > span.outside {
    font-size: 13px;
    /* font-weight: 400; */
    color: #898f94;
  }
`;
