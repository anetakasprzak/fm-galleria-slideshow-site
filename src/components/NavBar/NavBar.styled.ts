import styled from "styled-components";

export const NavContainer = styled.div`
  padding-bottom: 4rem;
  margin: 0 4rem 1rem 4rem;
  border-bottom: 1px solid #e5e5e5;

  @media screen and (max-width: 44.37rem) {
    padding-bottom: 2.5rem;
  }

  @media screen and (max-width: 32.9rem) {
    margin: 0 2rem 1rem 2rem;
  }
`;

export const LogoImg = styled.img`
  cursor: pointer;
`;
