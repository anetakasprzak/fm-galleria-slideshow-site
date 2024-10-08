import styled from "styled-components";

export const Container = styled.div``;

export const ProgressBarContainer = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 1px;
  z-index: 6;
  position: relative;
`;

export const Bar = styled.div<{ currentProgressPercentage: number }>`
  background-color: #000;
  height: 1px;
  width: ${(props) => `${props.currentProgressPercentage}%`};
  z-index: 8;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem 4rem 0 4rem;

  @media screen and (max-width: 32.9rem) {
    padding: 2rem 2rem 0 2rem;
  }
`;

export const TextBox = styled.div`
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PaintingName = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const AuthorName = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 3rem;
`;

export const IconBack = styled.img`
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: invert(97%) sepia(1%) saturate(0%) hue-rotate(147deg)
      brightness(93%) contrast(86%);
  }
`;

export const IconNext = styled.img`
  cursor: pointer;

  &:hover {
    filter: invert(97%) sepia(1%) saturate(0%) hue-rotate(147deg)
      brightness(93%) contrast(86%);
  }
`;
