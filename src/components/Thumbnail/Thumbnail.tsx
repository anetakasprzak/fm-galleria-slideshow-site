import { mockPaintingsData } from "../../../data";
import {
  ArtistName,
  GridWrapper,
  ImgWrapper,
  PaintingName,
  PaintingTextBox,
  ThumbnailImg,
  // PaintingName,
  // ArtistName,
  // PaintingTextBox,
  ThumbnailWrapper,
  ThumbnailsSectionBox,
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
    <GridWrapper>
      <ThumbnailsSectionBox>
        {mockPaintingsData.map((painting, idx) => (
          <Thumbnail key={painting.name} painting={painting} idx={idx} />
        ))}
      </ThumbnailsSectionBox>
    </GridWrapper>
  );
}

interface ThumbnailProps {
  painting: Painting;
  idx: number;
}

function Thumbnail({ painting, idx }: ThumbnailProps) {
  return (
    <ThumbnailWrapper
      data-container={idx}
      onClick={() => console.log(painting.name)}
    >
      <ImgWrapper>
        <ThumbnailImg src={painting.images.thumbnail} data-img={idx} />
        <PaintingTextBox>
          <PaintingName>{painting.name}</PaintingName>
          <ArtistName>{painting.artist.name}</ArtistName>
        </PaintingTextBox>
      </ImgWrapper>
    </ThumbnailWrapper>
  );
}

export default ThumbnailsBox;
