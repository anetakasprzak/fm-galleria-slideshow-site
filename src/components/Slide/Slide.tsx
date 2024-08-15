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

const mockSlide = {
  name: "Starry Night",
  year: 1889,
  description:
    'Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."',
  source: "https://en.wikipedia.org/wiki/The_Starry_Night",
  artist: {
    image: "/starry-night/artist.jpg",
    name: "Vincent Van Gogh",
  },
  images: {
    thumbnail: "/starry-night/thumbnail.jpg",
    hero: {
      small: "/starry-night/hero-small.jpg",
      large: "/starry-night/hero-large.jpg",
    },
    gallery: "/starry-night/gallery.jpg",
  },
};

function Slide() {
  return (
    <SlideContainer>
      <AuthorBox>
        <PaintingImg src={mockSlide.images.hero.large} />
        <ViewImgBtn>
          <BtnIcon src="../../../public/icon-view-image.svg" />
          <BtnText>View image</BtnText>
        </ViewImgBtn>
        <PaintingAuthorName>
          <NamesBox>
            <PaintingName>{mockSlide.name}</PaintingName>
            <AuthorName>{mockSlide.artist.name}</AuthorName>
          </NamesBox>
          <AuthorPortrait src={mockSlide.artist.image} />
        </PaintingAuthorName>
      </AuthorBox>
      <TextBoxInfo>
        <BigDate>{mockSlide.year}</BigDate>
        <TextInfo>{mockSlide.description}</TextInfo>
        <GoToSource>Go to source</GoToSource>
      </TextBoxInfo>
    </SlideContainer>
  );
}

export default Slide;
