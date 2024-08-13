import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  place-items: center;
`;

export const ThumbnailsSectionBox = styled.section`
  padding: 4rem 3rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, auto));
  grid-template-rows: repeat(5, minmax(min-content, auto));
  gap: 4rem;
`;

export const ThumbnailWrapper = styled.div`
  display: inline-block;
  position: relative;

  &[data-container="0"] {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  &[data-container="1"] {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  &[data-container="2"] {
    grid-column: 3/4;
    grid-row: 1/2;
  }

  &[data-container="3"] {
    grid-column: 4/5;
    grid-row: 1/2;
  }

  &[data-container="4"] {
    grid-column: 1/2;
    grid-row: 2/3;
  }

  &[data-container="5"] {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  &[data-container="6"] {
    grid-column: 3/4;
    grid-row: 2/3;
  }

  &[data-container="7"] {
    grid-column: 4/5;
    grid-row: 2/3;
  }

  &[data-container="8"] {
    grid-column: 1/2;
    grid-row: 3/4;
  }

  &[data-container="9"] {
    grid-column: 2/3;
    grid-row: 3/4;
  }

  &[data-container="10"] {
    grid-column: 4/5;
    grid-row: 3/4;
  }

  &[data-container="11"] {
    grid-column: 1/2;
    grid-row: 4/5;
  }

  &[data-container="12"] {
    grid-column: 2/3;
    grid-row: 4/5;
  }

  &[data-container="13"] {
    grid-column: 3/4;
    grid-row: 3/4;
  }

  &[data-container="14"] {
    grid-column: 4/5;
    grid-row: 4/5;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 31rem;
`;

export const ThumbnailImg = styled.img`
  filter: brightness(75%);
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
    height: 34rem;
  }

  &[data-img="5"] {
    height: 28rem;
  }

  &[data-img="6"] {
    height: 50rem;
  }

  &[data-img="7"] {
    height: 25rem;
  }

  &[data-img="8"] {
    height: 42rem;
  }

  &[data-img="9"] {
    height: 26rem;
  }

  &[data-img="10"] {
  }
`;

// export const PaintingTextBox = styled.div`
//   position: absolute;
//   bottom: 3.2rem;
//   left: 3.2rem;
//   color: #fff;
//   line-height: normal;
// `;

// export const PaintingName = styled.p`
//   font-size: 2.4rem;
//   font-weight: 700;
//   max-width: 80%;
//   margin-bottom: 0.6rem;
// `;

// export const ArtistName = styled.p`
//   font-size: 1.3rem;
//   opacity: 0.7528;
// `;
