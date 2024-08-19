import { NavContainer, SlideshowBtn, LogoImg } from "./NavBar.styled";
import { Painting } from "../../App";

interface NavBarProps {
  activePainting?: Painting;
  setCurrentActivePaintingId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

function NavBar({ activePainting, setCurrentActivePaintingId }: NavBarProps) {
  return (
    <NavContainer>
      <LogoImg
        src="/public/logo.svg"
        onClick={() => setCurrentActivePaintingId(null)}
      />
      <SlideshowBtn>
        {!activePainting ? "Start slideshow" : "Stop slideshow"}
      </SlideshowBtn>
    </NavContainer>
  );
}

export default NavBar;
