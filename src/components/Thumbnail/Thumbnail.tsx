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

interface ThumbnailsBoxProps {
  setCurrentActiveSlideId: React.Dispatch<React.SetStateAction<number | null>>;
}

function ThumbnailsBox({ setCurrentActiveSlideId }: ThumbnailsBoxProps) {
  return (
    <GridWrapper>
      <ThumbnailsSectionBox>
        {mockPaintingsData.map((painting, idx) => (
          <Thumbnail
            key={painting.name}
            painting={painting}
            idx={idx}
            setCurrentActiveSlideId={setCurrentActiveSlideId}
          />
        ))}
      </ThumbnailsSectionBox>
    </GridWrapper>
  );
}

interface ThumbnailProps {
  painting: Painting;
  idx: number;
  setCurrentActiveSlideId: React.Dispatch<React.SetStateAction<number | null>>;
}

function Thumbnail({ painting, idx, setCurrentActiveSlideId }: ThumbnailProps) {
  return (
    <ThumbnailWrapper
      data-container={idx}
      onClick={() => setCurrentActiveSlideId(painting.id)}
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
