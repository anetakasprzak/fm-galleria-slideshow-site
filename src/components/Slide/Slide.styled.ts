import styled from "styled-components";

export const SlideContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AuthorBox = styled.div`
  display: flex;
`;

export const PaintingImg = styled.img`
  width: 47.5rem;
`;

export const PaintingAuthorName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NamesBox = styled.div``;

export const PaintingName = styled.h1``;

export const AuthorName = styled.p``;

export const AuthorPortrait = styled.img``;

export const TextBoxInfo = styled.div`
  display: flex;

  position: relative;
  flex-direction: column;
  justify-content: space-between;
`;

export const BigDate = styled.span`
  font-size: 20rem;
  font-weight: 700;
  line-height: 15rem;
  color: #f3f3f3;
`;

export const TextInfo = styled.p`
  width: 35rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.8rem;

  position: absolute;
  top: 11.5rem;
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
`;
