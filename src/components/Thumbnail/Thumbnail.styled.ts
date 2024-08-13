import styled from "styled-components";

export const ThumbnailWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const ImgWrapper = styled.div`
  max-width: 31rem;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  filter: brightness(75%);
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
