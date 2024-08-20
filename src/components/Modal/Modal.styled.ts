import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(3px);
  z-index: 9;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-top: 2rem;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 0.25;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3rem;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;

    @media screen and (max-width: 82rem) {
      width: 50rem;
    }

    @media screen and (max-width: 38.5rem) {
      width: 40rem;
    }
  }
`;
