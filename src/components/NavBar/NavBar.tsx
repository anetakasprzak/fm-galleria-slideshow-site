import { NavContainer, LogoImg } from "./NavBar.styled";

interface NavBarProps {
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
