import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const AnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const AnimeItemContainer = styled.div`
  width: 8cm;
  height: 16cm;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 8cm;

  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  margin-top: 8px;
  font-size: 14px;
  color: #000;
  font-weight: 500;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage
}));

export const Animes = () => {

  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage = !animePage || !animePage.media || !animePage.media.length === 0;

  if(isEmptyAnimePage)
    return null;

  return <AnimeContainer>
    {animePage && animePage.media && animePage?.media?.map((anime) => (
      <AnimeItemContainer>
        <AnimeCover>
          <img src={anime.coverImage.extraLarge || ""} />
        </AnimeCover>
        <AnimeTitle>
          { anime.title.english  }
        </AnimeTitle>
      </AnimeItemContainer>
    ))}
  </AnimeContainer>
};