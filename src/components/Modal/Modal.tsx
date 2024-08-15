import { Painting } from "../../App";

interface ModalProps {
  activePainting: Painting;
}

function Modal({ activePainting }: ModalProps) {
  return (
    <img src={activePainting.images.hero.large} alt={activePainting.name} />
  );
}

export default Modal;
