import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  place-items: center;
`;

export const ThumbnailsSectionBox = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 31rem);
  grid-template-rows: repeat(11, 10rem);
  gap: 4rem;
  height: 100vh;
`;

export const ThumbnailWrapper = styled.div`
  display: inline-block;

  &[data-container="0"] {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  &[data-container="1"] {
    grid-column: 2/3;
    grid-row: 1/5;
  }

  &[data-container="2"] {
    grid-column: 3/4;
    grid-row: 1/3;
  }

  &[data-container="3"] {
    grid-column: 4/5;
    grid-row: 1/3;
  }

  &[data-container="4"] {
    grid-column: 1/2;
    grid-row: 3/6;
  }

  &[data-container="5"] {
    grid-column: 2/3;
    grid-row: 5/7;
  }

  &[data-container="6"] {
    grid-column: 3/4;
    grid-row: 3/5;
  }

  &[data-container="7"] {
    grid-column: 4/5;
    grid-row: 3/6;
  }

  &[data-container="8"] {
    grid-column: 1/2;
    grid-row: 6/10;
  }

  &[data-container="9"] {
    grid-column: 2/3;
    grid-row: 7/10;
  }

  &[data-container="10"] {
    grid-column: 4/5;
    grid-row: 6/8;
  }

  &[data-container="11"] {
    grid-column: 1/2;
    grid-row: 10/13;
  }

  &[data-container="12"] {
    grid-column: 2/3;
    grid-row: 10/12;
  }

  &[data-container="13"] {
    grid-column: 3/4;
    grid-row: 7/12;
  }

  &[data-container="14"] {
    grid-column: 4/5;
    grid-row: 9/14;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 31rem;
  position: relative;
  cursor: pointer;
`;

export const ThumbnailImg = styled.img`
  filter: brightness(70%);
  object-fit: cover;
  width: 100%;
  height: 25rem;

  &[data-img="0"] {
    height: 25rem;
  }

  &[data-img="1"] {
    height: 40rem;
  }

  &[data-img="2"] {
    height: 28.5rem;
  }

  &[data-img="3"] {
    height: 25rem;
  }

  &[data-img="4"] {
    height: 36rem;
    margin-top: 1.5rem;
  }

  &[data-img="5"] {
    margin-top: -11.5rem;
    height: 33rem;
  }

  &[data-img="6"] {
    height: 54rem;
    margin-top: 5rem;
  }

  &[data-img="7"] {
    height: 34rem;
    margin-top: 1rem;
  }

  &[data-img="8"] {
    height: 48rem;
  }

  &[data-img="9"] {
    height: 34rem;
    margin-top: -2rem;
  }

  &[data-img="10"] {
    height: 38rem;
    margin-top: -3rem;
  }

  &[data-img="11"] {
    height: 29.5rem;
    margin-top: -4rem;
  }

  &[data-img="12"] {
    height: 31.5rem;
    margin-top: -6rem;
  }

  &[data-img="13"] {
    margin-top: 7.4rem;
    height: 60rem;
  }

  &[data-img="14"] {
    height: 42.5rem;
    margin-top: -3rem;
  }
`;

export const PaintingTextBox = styled.div`
  position: absolute;
  bottom: 3.2rem;
  left: 3.2rem;
  color: #fff;
  line-height: normal;
`;

export const PaintingName = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  max-width: 80%;
  margin-bottom: 0.6rem;
`;

export const ArtistName = styled.p`
  font-size: 1.3rem;
  opacity: 0.7528;
`;
