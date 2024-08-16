import { useState } from "react";
import { Painting } from "../../App";
import {
  AuthorBox,
  PaintingAuthorName,
  PaintingImg,
  SlideContainer,
  TextBoxInfo,
  TextInfo,
  GoToSource,
  BigDate,
  PaintingName,
  AuthorName,
  AuthorPortrait,
  NamesBox,
  ViewImgBtn,
  BtnIcon,
  BtnText,
} from "./Slide.styled";
import Modal from "../Modal";

interface SlideProps {
  activePainting: Painting;
}

function Slide({ activePainting }: SlideProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SlideContainer>
        <AuthorBox>
          <PaintingImg src={activePainting.images.hero.large} />
          <ViewImgBtn>
            <BtnIcon src="/icon-view-image.svg" />
            <BtnText onClick={() => setIsOpen(true)}>View image</BtnText>
          </ViewImgBtn>
          <PaintingAuthorName>
            <NamesBox>
              <PaintingName>{activePainting.name}</PaintingName>
              <AuthorName>{activePainting.artist.name}</AuthorName>
            </NamesBox>
            <AuthorPortrait src={activePainting.artist.image} />
          </PaintingAuthorName>
        </AuthorBox>
        <TextBoxInfo>
          <BigDate>{activePainting.year}</BigDate>
          <TextInfo>{activePainting.description}</TextInfo>
          <GoToSource>Go to source</GoToSource>
        </TextBoxInfo>
      </SlideContainer>
      {isOpen && <Modal activePainting={activePainting} />}
    </>
  );
}

export default Slide;
