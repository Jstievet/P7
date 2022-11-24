import { getDataById } from "./../../API/index";
import SlideProductsheep from "./index.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ImgSlide() {
  const [appartementPictures, setAppartementPictures] = useState([]);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    getDataById(id).then((data) => {
      setAppartementPictures(data);
    });
  }, []);

  console.log("params", appartementPictures);
  const appartementImg = appartementPictures.pictures;
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
