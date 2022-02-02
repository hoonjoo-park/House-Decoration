import { API } from 'constants/';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ProductList } from './ProductList';
import { RoomImage } from './RoomImage';
import axios from 'axios';
export const RoomIntroduce = () => {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    const fetcher = async () => {
      const result: any = await axios.get(API);
      setApiData(result);
    };
    fetcher();
  }, []);
  console.log(apiData);
  return apiData ? (
    <Container>
      <RoomImage />
      <ProductList />
    </Container>
  ) : (
    <h3>Loading...</h3>
  );
};

const Container = styled.div`
  width: 40rem;
  height: 50rem;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.6);
`;
