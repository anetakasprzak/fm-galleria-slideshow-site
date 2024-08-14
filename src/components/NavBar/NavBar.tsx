import { NavContainer, SlideshowBtn } from "./NavBar.styled";

function NavBar() {
  return (
    <NavContainer>
      <img src="/public/logo.svg" />
      <SlideshowBtn>Start slideshow</SlideshowBtn>
    </NavContainer>
  );
}

export default NavBar;
