import styled from "styled-components";

export const SlideContainer = styled.div`
  padding: 0rem 4rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 12rem;

  @media screen and (max-width: 82rem) {
    flex-direction: column;
    margin: 0 auto;
    gap: 5rem;

    max-width: 80rem;
    padding-bottom: 5rem;
  }

  @media screen and (max-width: 44.37rem) {
    gap: 0rem;
  }

  @media screen and (max-width: 32.9rem) {
    padding: 0rem 2rem 3rem 2rem;
  }
`;

export const AuthorBox = styled.div`
  display: flex;
  position: relative;

  @media screen and (max-width: 44.37rem) {
    flex-direction: column;
  }
`;

export const PaintingImg = styled.img`
  width: 47.5rem;

  @media screen and (max-width: 44.37rem) {
    width: auto;
    height: 44rem;
  }
`;

export const ViewImgBtn = styled.button`
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
  font-family: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.4rem;
  padding: 1.4rem 1.6rem;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.25s;

  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2.143px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  @media screen and (max-width: 44.37rem) {
    bottom: 90%;
  }
`;

export const BtnIcon = styled.img``;

export const BtnText = styled.p``;

export const PaintingAuthorName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 82rem) {
    justify-content: flex-start;
  }
`;

export const NamesBox = styled.div`
  padding: 1rem 0 6rem 6.5rem;
  background-color: #fff;
  height: auto;
  margin-left: -6.5rem;
  margin-top: -1rem;

  @media screen and (max-width: 51.9rem) {
    margin-left: -10rem;
  }

  @media screen and (max-width: 48.12rem) {
    margin-left: -16rem;
  }

  @media screen and (max-width: 44.37rem) {
    margin-left: -6rem;
    margin-top: -10rem;
    width: 90%;
  }
`;

export const PaintingName = styled.h1`
  color: #000;
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 6.4rem;
  max-width: 30rem;
  margin-bottom: 2.4rem;

  @media screen and (max-width: 44.37rem) {
    margin-bottom: 1rem;
    font-size: 3.2rem;
    line-height: 3.8rem;
  }
`;

export const AuthorName = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const AuthorPortrait = styled.img`
  width: 12.8rem;
  margin-left: 3rem;
  margin-bottom: -6rem;

  @media screen and (max-width: 44.37rem) {
    margin-bottom: 0rem;
    margin-left: 0rem;
    margin-top: -2rem;
  }
`;

export const TextBoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 82rem) {
    align-self: flex-start;
    margin-top: 4rem;
  }

  @media screen and (max-width: 44.37rem) {
    align-items: flex-end;
    margin-top: 0;
    align-self: center;

    margin-top: -5rem;
  }
`;

export const BigDate = styled.span`
  font-size: 20rem;
  font-weight: 700;
  line-height: 15rem;
  color: #f3f3f3;

  @media screen and (max-width: 44.37rem) {
    font-size: 10rem;
  }
`;

export const TextInfo = styled.p`
  width: 35rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.8rem;
  margin-top: -13.5rem;

  @media screen and (max-width: 82rem) {
    width: 45.7rem;
    margin-top: -7rem;
    margin-left: 12rem;
  }

  @media screen and (max-width: 44.37rem) {
    margin-left: 0;
    margin-top: -5rem;
  }
`;

export const GoToSource = styled.a`
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.929px;
  text-decoration: underline;
  text-transform: uppercase;

  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 82rem) {
    margin-left: 12rem;
    margin-top: 7rem;
  }

  @media screen and (max-width: 32.9rem) {
    margin-top: 4rem;
  }
`;
