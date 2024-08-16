import { NavContainer, SlideshowBtn } from "./NavBar.styled";
import { Painting } from "../../App";

interface NavBarProps {
  activePainting: Painting;
}

function NavBar({ activePainting }: NavBarProps) {
  return (
    <NavContainer>
      <img src="/public/logo.svg" />
      <SlideshowBtn>
        {!activePainting ? "Start slideshow" : "Stop slideshow"}
      </SlideshowBtn>
    </NavContainer>
  );
}

export default NavBar;
