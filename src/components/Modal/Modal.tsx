import { Painting } from "../../App";
import { CloseBtn, Overlay } from "./Modal.styled";

interface ModalProps {
  activePainting: Painting;
}

function Modal({ activePainting }: ModalProps) {
  return (
    <Overlay>
      <CloseBtn>Close</CloseBtn>
      <picture>
        <source
          srcSet={activePainting.images.hero.small}
          media="(max-width: 58em)"
        />
        <source
          srcSet={activePainting.images.hero.large}
          media="(max-width: 90em)"
        />
        <img src={activePainting.images.hero.large} alt="image" />
      </picture>
    </Overlay>
  );
}

export default Modal;
