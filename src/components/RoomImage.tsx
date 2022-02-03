import { ApiInterface } from 'constants/';
import React from 'react';
import styled from 'styled-components';

export const RoomImage = ({ apiData }: ApiInterface) => {
  return (
    <ImageContainer>
      <img src={apiData.imageUrl} alt='img' />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }
`;
