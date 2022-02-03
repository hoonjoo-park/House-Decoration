import { TooltipBadge } from 'images';
import React from 'react';
import styled from 'styled-components';
import { BiSearch, BiX } from 'react-icons/bi';
import { ProductType } from 'constants/';

type Props = {
  product: ProductType;
  currentProduct: number;
  setCurrentProduct: (item: any) => void;
};

export const ToolTip = ({
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
    <ToolTipBox
      className={product.productName}
      x={product.pointX}
      y={product.pointY}
      onClick={handleClick}
    >
      <img src={TooltipBadge} alt='tooltipBadge' />
      {currentProduct === product.productId ? <BiX /> : <BiSearch />}
    </ToolTipBox>
  );
};

const ToolTipBox = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
  transform: ${(props) => `translate(${props.y * 1.28}px,${props.x * 1.22}px)`};
  opacity: 0.7;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 14px;
    color: #ffffff;
    transform: translate(-50%, -50%);
  }
`;
