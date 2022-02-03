import { RoomIntroduce } from 'components/RoomIntroduce';
import React from 'react';
import styled from 'styled-components';

export const IntroduceHome = () => {
  return (
    <Container>
      <RoomIntroduce />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
`;
