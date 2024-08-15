import NavBar from "./components/NavBar";
import ThumbnailsBox from "./components/Thumbnail";
import { Wrapper } from "./App.styled";
import { useState } from "react";
import Slider from "./components/Slider";
import { mockPaintingsData } from "../data";

function App() {
  const [currentActiveSlideId, setCurrentActiveSlideId] = useState<
    number | null
  >(null);

  const activeSlide = mockPaintingsData.find(
    (painting) => painting.id === currentActiveSlideId
  );

  console.log(activeSlide);

  console.log(currentActiveSlideId);
  return (
    <Wrapper>
      <NavBar />
      {!activeSlide && (
        <ThumbnailsBox setCurrentActiveSlideId={setCurrentActiveSlideId} />
      )}
      {activeSlide && <Slider activeSlide={activeSlide} />}
    </Wrapper>
  );
}

export default App;
