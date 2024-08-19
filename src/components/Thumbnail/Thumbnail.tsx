import { mockPaintingsData } from "../../../data";
import { Painting } from "../../App";
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

interface ThumbnailsBoxProps {
  setCurrentActivePaintingId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

function ThumbnailsBox({ setCurrentActivePaintingId }: ThumbnailsBoxProps) {
  return (
    <GridWrapper>
      <ThumbnailsSectionBox>
        {mockPaintingsData.map((painting, idx) => (
          <Thumbnail
            key={painting.name}
            painting={painting}
            idx={idx}
            setCurrentActivePaintingId={setCurrentActivePaintingId}
          />
        ))}
      </ThumbnailsSectionBox>
    </GridWrapper>
  );
}

interface ThumbnailProps {
  painting: Painting;
  idx: number;
  setCurrentActivePaintingId: React.Dispatch<
    React.SetStateAction<number | null>
  >;
}

function Thumbnail({
  painting,
  idx,
  setCurrentActivePaintingId,
}: ThumbnailProps) {
  return (
    <ThumbnailWrapper
      data-container={idx}
      onClick={() => setCurrentActivePaintingId(painting.id)}
    >
      <ImgWrapper>
        <ThumbnailImg src={painting.images.thumbnail} data-img={idx} />
        <PaintingTextBox>
          <PaintingName>{painting.name}</PaintingName>
          <ArtistName>{painting.artist.name}</ArtistName>
        </PaintingTextBox>
      </ImgWrapper>
      <p>{painting.id - 1}</p>
    </ThumbnailWrapper>
  );
}

export default ThumbnailsBox;
