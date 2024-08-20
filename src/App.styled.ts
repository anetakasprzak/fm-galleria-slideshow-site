import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 32.9rem) {
    gap: 3rem;
  }

  @media screen and (max-width: 26.3rem) {
    gap: 2rem;
  }
`;
