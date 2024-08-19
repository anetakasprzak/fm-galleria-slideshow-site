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

  @media screen and (max-width: 87.5em) {
    grid-template-columns: repeat(4, 28rem);
    column-gap: 2.8rem;
  }

  @media screen and (max-width: 76.75em) {
    grid-template-columns: repeat(3, 31rem);
    grid-template-rows: repeat(16, 10rem);
    column-gap: 4rem;
  }

  @media screen and (max-width: 65em) {
    column-gap: 3rem;
    grid-template-columns: repeat(3, 28rem);
  }

  @media screen and (max-width: 58.37em) {
    column-gap: 4rem;
    grid-template-columns: repeat(2, 31rem);
    grid-template-rows: repeat(22, 10rem);
  }

  @media screen and (max-width: 43.75rem) {
    column-gap: 3rem;
    grid-template-columns: repeat(2, 28rem);
  }

  @media screen and (max-width: 38.55rem) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(42, 10rem);
  }
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

  @media screen and (max-width: 76.75em) {
    &[data-container="3"] {
      grid-column: 1/2;
      grid-row: 3/5;
    }

    &[data-container="4"] {
      grid-column: 2/3;
      grid-row: 4/7;
    }

    &[data-container="5"] {
      grid-column: 3/4;
      grid-row: 4/6;
    }

    &[data-container="6"] {
      grid-column: 1/2;
      grid-row: 6/9;
    }

    &[data-container="7"] {
      grid-column: 2/3;
      grid-row: 7/10;
    }

    &[data-container="8"] {
      grid-column: 3/4;
      grid-row: 6/10;
    }

    &[data-container="9"] {
      grid-column: 1/2;
      grid-row: 11/13;
    }

    &[data-container="10"] {
      grid-column: 2/3;
      grid-row: 9/11;
    }

    &[data-container="11"] {
      grid-column: 3/4;
      grid-row: 10/13;
    }

    &[data-container="12"] {
      grid-column: 1/2;
      grid-row: 14/16;
    }

    &[data-container="13"] {
      grid-column: 2/3;
      grid-row: 12/16;
    }

    &[data-container="14"] {
      grid-column: 3/4;
      grid-row: 13/16;
    }
  }

  @media screen and (max-width: 58.37em) {
    &[data-container="2"] {
      grid-column: 1/2;
      grid-row: 3/5;
    }

    &[data-container="3"] {
      grid-column: 2/3;
      grid-row: 4/7;
    }

    &[data-container="4"] {
      grid-column: 1/2;
      grid-row: 5/7;
    }

    &[data-container="5"] {
      grid-column: 2/3;
      grid-row: 8/10;
    }

    &[data-container="6"] {
      grid-column: 1/2;
      grid-row: 7/10;
    }

    &[data-container="7"] {
      grid-column: 2/3;
      grid-row: 10/13;
    }

    &[data-container="8"] {
      grid-column: 1/2;
      grid-row: 11/14;
    }

    &[data-container="9"] {
      grid-column: 2/3;
      grid-row: 13/16;
    }

    &[data-container="10"] {
      grid-column: 1/2;
      grid-row: 14/16;
    }

    &[data-container="11"] {
      grid-column: 2/3;
      grid-row: 16/19;
    }

    &[data-container="12"] {
      grid-column: 1/2;
      grid-row: 18/20;
    }

    &[data-container="13"] {
      grid-column: 2/3;
      grid-row: 19/22;
    }

    &[data-container="14"] {
      grid-column: 1/2;
      grid-row: 20/22;
    }
  }

  @media screen and (max-width: 38.55rem) {
    &[data-container="0"] {
      grid-column: 1/2;
      grid-row: 1/3;
    }

    &[data-container="1"] {
      grid-column: 1/2;
      grid-row: 3/6;
    }

    &[data-container="2"] {
      grid-column: 1/2;
      grid-row: 6/8;
    }

    &[data-container="3"] {
      grid-column: 1/2;
      grid-row: 8/10;
    }

    &[data-container="4"] {
      grid-column: 1/2;
      grid-row: 11/13;
    }

    &[data-container="5"] {
      grid-column: 1/2;
      grid-row: 13/15;
    }

    &[data-container="6"] {
      grid-column: 1/2;
      grid-row: 15/19;
    }

    &[data-container="7"] {
      grid-column: 1/2;
      grid-row: 19/21;
    }

    &[data-container="8"] {
      grid-column: 1/2;
      grid-row: 21/25;
    }

    &[data-container="9"] {
      grid-column: 1/2;
      grid-row: 25/27;
    }

    &[data-container="10"] {
      grid-column: 1/2;
      grid-row: 27/30;
    }

    &[data-container="11"] {
      grid-column: 1/2;
      grid-row: 30/32;
    }

    &[data-container="12"] {
      grid-column: 1/2;
      grid-row: 32/35;
    }

    &[data-container="13"] {
      grid-column: 1/2;
      grid-row: 35/37;
    }

    &[data-container="14"] {
      grid-column: 1/2;
      grid-row: 37/42;
    }
  }
`;
export const ImgWrapper = styled.div`
  max-width: 31rem;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 87.5em) {
    max-width: 28rem;
  }

  @media screen and (max-width: 76.75em) {
    max-width: 31rem;
  }

  @media screen and (max-width: 43.75rem) {
    max-width: 28rem;
  }

  @media screen and (max-width: 38.55rem) {
    max-width: 32.7rem;
  }
`;

export const ThumbnailImg = styled.img`
  filter: brightness(70%);
  object-fit: cover;
  width: 100%;

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

  @media screen and (max-width: 76.75em) {
    &[data-img="0"] {
      height: 31rem;
    }

    &[data-img="1"] {
      height: 40rem;
    }

    &[data-img="2"] {
      height: 30rem;
    }

    &[data-img="3"] {
      height: 38rem;
      margin-top: 7rem;
    }

    &[data-img="4"] {
      height: 34rem;
      margin-top: 2rem;
    }

    &[data-img="5"] {
      margin-top: -8rem;
      height: 33rem;
    }

    &[data-img="6"] {
      height: 54rem;
      margin-top: 7rem;
    }

    &[data-img="7"] {
      height: 34rem;
      margin-top: -1.5rem;
    }

    &[data-img="8"] {
      height: 50rem;
      margin-top: 1.5rem;
    }

    &[data-img="9"] {
      height: 34rem;
      margin-top: -5rem;
    }

    &[data-img="10"] {
      height: 34rem;
      margin-top: 8.5rem;
    }

    &[data-img="11"] {
      height: 33rem;
      margin-top: 0rem;
    }

    &[data-img="12"] {
      height: 34rem;
      margin-top: -9rem;
    }

    &[data-img="13"] {
      margin-top: 5rem;
      height: 48rem;
    }

    &[data-img="14"] {
      height: 44rem;
      margin-top: -4.8rem;
    }
  }

  @media screen and (max-width: 58.37em) {
    &[data-img="0"] {
      height: 25rem;
    }

    &[data-img="1"] {
      height: 40rem;
    }

    &[data-img="2"] {
      height: 28rem;
      margin-top: 1.5rem;
    }

    &[data-img="3"] {
      height: 40rem;
      margin-top: 3rem;
    }

    &[data-img="4"] {
      height: 28rem;
      margin-top: 5.5rem;
    }

    &[data-img="5"] {
      height: 34rem;
      margin-top: -8rem;
    }

    &[data-img="6"] {
      height: 44rem;
      margin-top: 10rem;
    }

    &[data-img="7"] {
      height: 45rem;
      margin-top: 4rem;
    }

    &[data-img="8"] {
      height: 45rem;
      margin-top: 3.5rem;
    }

    &[data-img="9"] {
      height: 32rem;
      margin-top: 12rem;
    }

    &[data-img="10"] {
      height: 28rem;
      margin-top: 11.5rem;
    }

    &[data-img="11"] {
      height: 35rem;
      margin-top: 7rem;
    }

    &[data-img="12"] {
      height: 32rem;
      margin-top: -12rem;
    }

    &[data-img="13"] {
      margin-top: 5rem;
      height: 48rem;
    }

    &[data-img="14"] {
      height: 41rem;
      margin-top: -2rem;
    }
  }

  @media screen and (max-width: 38.55rem) {
    &[data-img="0"] {
      height: 24rem;
      margin-top: 0;
    }

    &[data-img="1"] {
      height: 39rem;
      margin-top: 0;
    }

    &[data-img="2"] {
      height: 28.5rem;
      margin-top: 1rem;
    }

    &[data-img="3"] {
      height: 25rem;
      margin-top: 5rem;
    }

    &[data-img="4"] {
      height: 34rem;
      margin-top: -8rem;
    }

    &[data-img="5"] {
      height: 28rem;
      margin-top: 2rem;
    }

    &[data-img="6"] {
      height: 50rem;
      margin-top: 6rem;
    }

    &[data-img="7"] {
      height: 25rem;
      margin-top: 4rem;
    }

    &[data-img="8"] {
      height: 42rem;
      margin-top: 5rem;
    }

    &[data-img="9"] {
      height: 26rem;
      margin-top: -5rem;
    }

    &[data-img="10"] {
      height: 43rem;
      margin-top: -3rem;
    }

    &[data-img="11"] {
      height: 25rem;
      margin-top: 2rem;
    }

    &[data-img="12"] {
      height: 33rem;
      margin-top: 3rem;
    }

    &[data-img="13"] {
      height: 52rem;
      margin-top: -2rem;
    }

    &[data-img="14"] {
      height: 38rem;
      margin-top: 26rem;
    }
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
