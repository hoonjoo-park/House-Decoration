import { Props } from 'constants/';
import React from 'react';
import styled from 'styled-components';
import { Product } from './Product';

export const ProductList = ({ apiData }: Props) => {
  console.log(apiData);
  return (
    <ListContainer>
      {apiData.productList.map((list) => (
        <Product key={list.productId} product={list} />
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
