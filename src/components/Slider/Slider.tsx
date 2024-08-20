import { Painting } from "../../App";
import Slide from "../Slide/Slide";
import {
  Container,
  SliderWrapper,
  TextBox,
  ButtonsBox,
  PaintingName,
  AuthorName,
  IconBack,
  IconNext,
  ProgressBarContainer,
  Details,
  Bar,
} from "./Slider.styled";

interface SliderProps {
  activePainting: Painting;
  nextSlide: () => void;
  prevSlide: () => void;
}

function Slider({ activePainting, nextSlide, prevSlide }: SliderProps) {
  return (
    <Container>
      <Slide activePainting={activePainting} />
      <SliderComponent
        activePainting={activePainting}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </Container>
  );
}

interface SliderComponentProps {
  activePainting: Painting;
  nextSlide: () => void;
  prevSlide: () => void;
}

function SliderComponent({
  activePainting,
  nextSlide,
  prevSlide,
}: SliderComponentProps) {
  const handlePrev = () => {
    prevSlide();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    nextSlide();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <SliderWrapper>
      <ProgressBarContainer>
        <Bar />
      </ProgressBarContainer>
      <Details>
        <TextBox>
          <PaintingName>{activePainting.name}</PaintingName>
          <AuthorName>{activePainting.artist.name}</AuthorName>
        </TextBox>
        <ButtonsBox>
          <IconBack src="/icon-back-button.svg" onClick={handlePrev} />
          <IconNext src="/icon-next-button.svg" onClick={handleNext} />
        </ButtonsBox>
      </Details>
    </SliderWrapper>
  );
}

export default Slider;
