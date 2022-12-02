import { useState } from "react";
import vectorup from "./../../asset/VectorUp.png";

function Slide({ pictures }) {
  //définition de l'index de la premiere image à index 0
  const [currentImg, setCurrentImg] = useState(0);
  // const allPictures = pictures;
  //définition du nombre d'image comprise dans pictures
  const lengthPicturesArray = pictures.length;

  //définition l'action de la fléche next , quand on arrive au dernier on reviens à index 0
  const nextPicture = () => {
    setCurrentImg(currentImg === lengthPicturesArray - 1 ? 0 : currentImg + 1);
  };
  //définition l'action de la fléche preview , quand on est à l'index 0 on repars à la fin du tableau
  const previewPicture = () => {
    setCurrentImg(currentImg === 0 ? lengthPicturesArray - 1 : currentImg - 1); // on repart au dernier slide quand on est au premier
  };

  return (
    <div className="container_slide">
      <div className="container_picture">
        {/* Intégration des fléches pour next preview
    quand lengthPicturesArray est supérieur à 1 alors la fléche de gauche est visible */}
        {lengthPicturesArray > 1 && (
          <img
            src={vectorup}
            alt="fléche de gauche"
            onClick={() => previewPicture()}
            className="vectorPreview"
          />
        )}
        {lengthPicturesArray > 1 && (
          <img
            src={vectorup}
            alt="fléche de droite"
            onClick={() => nextPicture()}
            className="vectorNext"
          />
        )}
        <img src={pictures[currentImg]} alt={" "} />
      </div>
    </div>
  );
}

export default Slide;
