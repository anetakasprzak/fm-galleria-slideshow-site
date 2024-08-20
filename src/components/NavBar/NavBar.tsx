import { NavContainer, LogoImg } from "./NavBar.styled";
import { Painting } from "../../App";

interface NavBarProps {
  activePainting?: Painting;
  setCurrentActivePaintingId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

function NavBar({ setCurrentActivePaintingId }: NavBarProps) {
  return (
    <NavContainer>
      <LogoImg
        src="/public/logo.svg"
        onClick={() => setCurrentActivePaintingId(null)}
      />
    </NavContainer>
  );
}

export default NavBar;
