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

  return (
    <Wrapper>
      <NavBar activePainting={activePainting} />
      {!activePainting && (
        <ThumbnailsBox
          setCurrentActivePaintingId={setCurrentActivePaintingId}
        />
      )}
      {activePainting && <Slider activePainting={activePainting} />}
    </Wrapper>
  );
}

export default App;
