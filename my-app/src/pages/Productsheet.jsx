import Collapse from "../components/Collapse";
import Slide from "../components/Slide";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataById } from "./../API/index";

function Productsheet() {
  const [appartement, setAppartement] = useState([]);
  const idLocation = useParams();
  const id = idLocation.id;

  useEffect(() => {
    getDataById(id).then((data) => {
      setAppartement(data);
    });
  }, [id]);
  console.log("appartement", appartement);
  return (
    <section className="ContainerSlide">
      <Slide pictures={appartement} />

      <div className="Productsheet_Description">
        <Collapse title="Description" />
        <Collapse title="Equipements" />
      </div>
    </section>
  );
}
export default Productsheet;
