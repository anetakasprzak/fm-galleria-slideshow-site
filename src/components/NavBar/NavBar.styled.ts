import styled from "styled-components";

export const NavContainer = styled.div`
  padding-bottom: 4rem;
  margin: 0 4rem 1rem 4rem;
  border-bottom: 1px solid #e5e5e5;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  cursor: pointer;
`;

export const SlideshowBtn = styled.button`
  font-family: inherit;
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  color: #7d7d7d;
  font-weight: 700;
  letter-spacing: 2.571px;
  font-size: 1.2rem;

  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
