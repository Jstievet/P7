import { useState } from "react";
import vectorup from "./../../asset/VectorUp.png";

function Slide({ pictures }) {
  //définition de l'index de la premiere image à index 0
  console.log("props", props.pictures.pictures);
  const [currentImg, setCurrentImg] = useState(0);
  //définition du nombre d'image comprise dans pictures
  const lengthPicturesArray = [props.pictures.pictures].length;
  //définition l'action de la fléche next , quand on arrive au dernier on reviens à index 0
  const nextPicture = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };
  //définition l'action de la fléche preview , quand on est à l'index 0 on repars à la fin du tableau
  const previewPicture = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1); // on repart au dernier slide quand on est au premier
  };

  return (
    <div className="slide_picture">
      {/* Intégration des fléches pour next preview
    quand lengthPicturesArray est supérieur à 1 alors la fléche de gauche est visible */}
      {length > 1 && (
        <img
          src={vectorup}
          alt="fléche de gauche"
          onClick={() => previewPicture()}
          className="vectorPreview"
        />
      )}
      {length > 1 && (
        <img
          src={vectorup}
          alt="fléche de droite"
          onClick={() => nextPicture()}
          className="vectorNext"
        />
      )}
      <img src={props.pictures.pictures[currentImg]} alt={" "} />
    </div>
  );
}

export default Slide;
