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
}

function Slider({ activePainting }: SliderProps) {
  return (
    <Container>
      <Slide activePainting={activePainting} />
      <SliderComponent activePainting={activePainting} />
    </Container>
  );
}

interface SliderComponentProps {
  activePainting: Painting;
}

function SliderComponent({ activePainting }: SliderComponentProps) {
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
          <IconBack src="/icon-back-button.svg" />
          <IconNext src="/icon-next-button.svg" />
        </ButtonsBox>
      </Details>
    </SliderWrapper>
  );
}

export default Slider;
