import styled from "styled-components";

export const SlideContainer = styled.div`
  padding: 0rem 4rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 12rem;
  border-bottom: 1px solid #e5e5e5;
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

export const NamesBox = styled.div`
  padding-left: 6.5rem;
  background-color: #fff;
  height: 23.8rem;
  margin-left: -6.5rem;
  margin-top: -1rem;
  padding-top: 1rem;
`;

export const PaintingName = styled.h1`
  color: #000;
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 6.4rem;
  max-width: 36rem;
  margin-bottom: 2.4rem;
`;

export const AuthorName = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const AuthorPortrait = styled.img`
  width: 12.8rem;
  margin-left: 3rem;
  margin-bottom: -6rem;
`;

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
