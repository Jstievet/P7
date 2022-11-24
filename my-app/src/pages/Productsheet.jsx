import Collapse from "../components/Collapse";
import Slide from "./../components/Slide/imgSlide";

function Productsheet() {
  return (
    <div>
      <div className="ContainerSlide">
        <Slide />
      </div>

      <div className="Productsheet_Description">
        <Collapse title="Description" />
        <Collapse title="Equipements" />
      </div>
    </div>
  );
}
export default Productsheet;
