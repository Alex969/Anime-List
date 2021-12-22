import React from "react";
import styled from 'styled-components';

interface IHomePageProps {

}

const Container = styled.div`
  width: 100 %;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Homepage = (props: IHomePageProps) => {
  return <Container>
    <h1>The biggest Animes of the moment</h1>
  </Container>
}