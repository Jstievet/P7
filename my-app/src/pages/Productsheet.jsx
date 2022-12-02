import Collapse from "../components/Collapse";
import Slide from "../components/Slide";
import ProductsheetComponent from "./../components/ProductsheetComponents";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataById } from "./../API/index";

function Productsheet() {
  const [appartement, setAppartement] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [description, setDescription] = useState();
  const [equipments, setEquipments] = useState([]);
  // const [appartementInfos, setappartementInfos] = useState([]);
  const titleDescription = "Description";
  const titleEquipments = "Equipements";

  const { id } = useParams();

  useEffect(() => {
    getDataById(id).then((data) => {
      // setappartementInfos(data);
      setEquipments(data.equipments);
      setDescription(data.description);
      setPictures(data.pictures);
      setAppartement(data);
    });
  }, [id]);
  console.log("appartementInfos", appartement);

  return (
    <section className="container">
      {pictures && <Slide pictures={pictures} />}
      {appartement && <ProductsheetComponent appart={appartement} />}

      <div className="container_description">
          {(appartement && titleDescription) && <Collapse title={titleDescription} text={description} />}
          {(appartement && titleEquipments) && <Collapse title={titleEquipments} text={equipments} />}
      </div>
    </section>
  );
}
export default Productsheet;
