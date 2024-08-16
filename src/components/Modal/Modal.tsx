import { Painting } from "../../App";
import { CloseBtn, Overlay, ModalContent } from "./Modal.styled";

interface ModalProps {
  activePainting: Painting;
}

function Modal({ activePainting }: ModalProps) {
  return (
    <Overlay>
      <CloseBtn>Close</CloseBtn>
      <ModalContent>
        <img src={activePainting.images.gallery} alt="image" />
      </ModalContent>
    </Overlay>
  );
}

export default Modal;
