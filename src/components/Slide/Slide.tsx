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

function Slide({ activeSlide }) {
  return (
    <SlideContainer>
      <AuthorBox>
        <PaintingImg src={activeSlide.images.hero.large} />
        <ViewImgBtn>
          <BtnIcon src="../../../public/icon-view-image.svg" />
          <BtnText>View image</BtnText>
        </ViewImgBtn>
        <PaintingAuthorName>
          <NamesBox>
            <PaintingName>{activeSlide.name}</PaintingName>
            <AuthorName>{activeSlide.artist.name}</AuthorName>
          </NamesBox>
          <AuthorPortrait src={activeSlide.artist.image} />
        </PaintingAuthorName>
      </AuthorBox>
      <TextBoxInfo>
        <BigDate>{activeSlide.year}</BigDate>
        <TextInfo>{activeSlide.description}</TextInfo>
        <GoToSource>Go to source</GoToSource>
      </TextBoxInfo>
    </SlideContainer>
  );
}

export default Slide;
