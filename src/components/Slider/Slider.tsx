import { mockPaintingsData } from "../../../data";
import Slide from "../Slide/Slide";
import { Container } from "./Slider.styled";

function Slider() {
  return (
    <Container>
      {mockPaintingsData.map((slide) => (
        <Slide key={slide.name} slide={slide} />
      ))}
    </Container>
  );
}

export default Slider;
