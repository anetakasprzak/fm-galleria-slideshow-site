import NavBar from "./components/NavBar";
import ThumbnailsBox from "./components/Thumbnail";
import { Wrapper } from "./App.styled";
import { useState } from "react";
import Slider from "./components/Slider";
import { mockPaintingsData } from "../data";

export type Painting = {
  id: number;
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: string;
    name: string;
  };
  images: {
    thumbnail: string;
    hero: {
      small: string;
      large: string;
    };
    gallery: string;
  };
};

function App() {
  const [currentActivePaintingId, setCurrentActivePaintingId] = useState<
    number | null
  >(null);

  const activePainting = mockPaintingsData.find(
    (painting) => painting.id === currentActivePaintingId
  );

  const checkNumber = (newIndex: number) => {
    if (newIndex > mockPaintingsData.length - 1) {
      return 1;
    }
    if (newIndex < 0) {
      return mockPaintingsData.length - 1;
    }

    return newIndex;
  };

  const nextSlide = () => {
    setCurrentActivePaintingId((currentIndex) => {
      const newIndex = currentIndex! + 1;
      return checkNumber(newIndex);
    });
  };

  const prevSlide = () => {
    setCurrentActivePaintingId((currentIndex) => {
      const newIndex = currentIndex! - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <Wrapper>
      <NavBar setCurrentActivePaintingId={setCurrentActivePaintingId} />
      {!activePainting && (
        <ThumbnailsBox
          setCurrentActivePaintingId={setCurrentActivePaintingId}
        />
      )}
      {activePainting && (
        <Slider
          activePainting={activePainting}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
    </Wrapper>
  );
}

export default App;
