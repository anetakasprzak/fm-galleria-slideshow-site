import { Painting } from "../../App";
import { CloseBtn, Overlay, ModalContent } from "./Modal.styled";

interface ModalProps {
  activePainting: Painting;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ activePainting, setIsOpen }: ModalProps) {
  return (
    <Overlay>
      <ModalContent>
        <CloseBtn onClick={() => setIsOpen(false)}>Close</CloseBtn>
        <img src={activePainting.images.gallery} alt="image" />
      </ModalContent>
    </Overlay>
  );
}

export default Modal;
