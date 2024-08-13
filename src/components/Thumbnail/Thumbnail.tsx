import { mockPaintingsData } from "../../../data";
import {
  ImgWrapper,
  ThumbnailImg,
  PaintingName,
  ArtistName,
  PaintingTextBox,
  ThumbnailWrapper,
} from "./Thumbnail.styled";

type Painting = {
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

function ThumbnailsBox() {
  return (
    <div>
      {mockPaintingsData.map((painting) => (
        <Thumbnail key={painting.name} painting={painting} />
      ))}
    </div>
  );
}

interface ThumbnailProps {
  painting: Painting;
}

function Thumbnail({ painting }: ThumbnailProps) {
  return (
    <ThumbnailWrapper>
      <ImgWrapper>
        <ThumbnailImg src={painting.images.thumbnail} />
      </ImgWrapper>
      <PaintingTextBox>
        <PaintingName>{painting.name}</PaintingName>
        <ArtistName>{painting.artist.name}</ArtistName>
      </PaintingTextBox>
    </ThumbnailWrapper>
  );
}

export default ThumbnailsBox;
