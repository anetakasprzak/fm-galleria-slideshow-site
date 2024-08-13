import NavBar from "./components/NavBar";
import ThumbnailsBox from "./components/Thumbnail";
import { Wrapper } from "./HomePage.styled";

function App() {
  return (
    <Wrapper>
      <NavBar />
      <ThumbnailsBox />
    </Wrapper>
  );
}

export default App;
