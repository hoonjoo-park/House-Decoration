import { API } from 'constants/';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProductList } from './ProductList';
import { RoomImage } from './RoomImage';
import axios from 'axios';
export const RoomIntroduce = () => {
  const [apiData, setApiData] = useState<any>();
  const [currentProduct, setCurrentProduct] = useState(0);
  useEffect(() => {
    const fetcher = async () => {
      const result = await axios.get(API);
      setApiData(result.data);
    };
    fetcher();
  }, []);
  return apiData ? (
    <Container>
      <RoomImage
        apiData={apiData}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
      <ProductList
        apiData={apiData}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
    </Container>
  ) : (
    <h3>Loading...</h3>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  min-height: 90vh;
  margin: 3rem 0;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.6);
`;
