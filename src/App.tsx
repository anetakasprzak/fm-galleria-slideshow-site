import NavBar from "./components/NavBar";
import ThumbnailsBox from "./components/Thumbnail";
import { Wrapper } from "./App.styled";
// import Slider from "./components/Slider";

function App() {
  return (
    <Wrapper>
      <NavBar />
      <ThumbnailsBox />
      {/* <Slider /> */}
    </Wrapper>
  );
}

export default App;
