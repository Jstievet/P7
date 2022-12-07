import Collapse from "../components/Collapse";
import Slide from "../components/Slide";
import ProductsheetComponent from "./../components/ProductsheetComponents";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataById } from "./../API/index";
import { useNavigate } from "react-router-dom";

function Productsheet() {
  const [appartement, setAppartement] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [description, setDescription] = useState();
  const [equipments, setEquipments] = useState([]);
  const navigate = useNavigate();
  const titleDescription = "Description";
  const titleEquipments = "Equipements";

  const { id } = useParams();

  useEffect(() => {
    getDataById(id)
      .then((data) => {
        setEquipments(data.equipments);
        setDescription(data.description);
        setPictures(data.pictures);
        setAppartement(data);
      })
      .catch((error) => {
        navigate("/404");
      });
  }, [id]);

  return (
    <section className="container">
      {pictures && <Slide pictures={pictures} />}
      {appartement && <ProductsheetComponent appart={appartement} />}

      <div className="container_description">
        {appartement && titleDescription && (
          <Collapse title={titleDescription} text={description} />
        )}
        {appartement && titleEquipments && (
          <Collapse title={titleEquipments} text={equipments} />
        )}
      </div>
    </section>
  );
}
export default Productsheet;
