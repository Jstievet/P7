import Collapse from "../components/Collapse";
import SlideProductsheep from "./../components/Slide/imgSlide";
import { Slide } from "react-slideshow-image";

function Productsheet() {
  return (
    <div>
      <Slide>
        <div className="ContainerSlide">
          <SlideProductsheep />
        </div>
      </Slide>
      <div className="Productsheet_Description">
        <Collapse title="Description" />
        <Collapse title="Equipements" />
      </div>
    </div>
  );
}
export default Productsheet;
