import React, { useEffect } from "react";
import { Dispatch } from "redux";
import styled from 'styled-components';
import { useAppDispatch } from "../../hooks";
import animeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { Animes } from "./animes";
import { setAnimePage } from "./homePageSlice";

interface IHomePageProps {

}

const Container = styled.div`
  width: 100 %;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page))
});

export const HomePage = (props: IHomePageProps) => {
  const { setAnimePage } = actionDispatch(useAppDispatch())

  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0, 102).catch((err) => {
      console.log("Error: ", err);
    });

    console.log("Anime Page: ", animePage);
    if(animePage) setAnimePage(animePage);
    };
  

  useEffect(() => {
    fetchAnimePage();
  }, []);
  
  return (
  <Container>
    <h1>List of Popular Animes</h1>
    <Animes />
  </Container>
  );

  }
