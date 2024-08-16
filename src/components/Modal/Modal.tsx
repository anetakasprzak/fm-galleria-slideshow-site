import { Painting } from "../../App";
import { CloseBtn, Overlay, ModalContent } from "./Modal.styled";

interface ModalProps {
  activePainting: Painting;
}

function Modal({ activePainting }: ModalProps) {
  return (
    <Overlay>
      <ModalContent>
        <CloseBtn onClick={() => activePainting(null)}>Close</CloseBtn>
        <img src={activePainting.images.gallery} alt="image" />
      </ModalContent>
    </Overlay>
  );
}

export default Modal;
