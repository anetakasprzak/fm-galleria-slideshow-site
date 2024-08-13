import { mockPaintingsData } from "../data";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        {mockPaintingsData.map((painting) => (
          <img key={painting.name} src={painting.images.thumbnail} />
        ))}
      </div>
      {/* <Slider /> */}
    </div>
  );
}

export default App;
