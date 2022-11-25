import { getDataById, getData } from "./../../API/index";
import SlideProductsheep from "./index.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ImgSlide() {
  const [appartementPictures, setAppartementPictures] = useState([]);
  const [appartement, setAppartement] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getData().then((data) => {
      setAppartementPictures(data);
    });
  }, []);
  useEffect(() => {
    getDataById(appartement, id).then((response) => {
      setAppartement(response);
    });
  }, [appartement, id]);

  const appartementImg = appartementPictures.pictures;
  console.log("params", appartementPictures);
  return (
    <div className="AllCard">
      {appartementImg.map((Img, index) => (
        <SlideProductsheep
          key={`${index}-${Math.random()}`}
          pictures={Img.pictures}
        />
      ))}
    </div>
  );
}

export default ImgSlide;
