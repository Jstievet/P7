import appartementSheet from "./../../logement.json";
import SlideProductsheep from "./index.jsx";
import { useParams } from "react-router-dom";

function ImgSlide() {
  //recupératin de l'id dans l'url
  const params = useParams();
  if (appartementSheet.indexOf(params) !== -1) {
    const indexSheetAppart = appartementSheet.indexOf(params);
    const appartementImg = appartementSheet[indexSheetAppart];

    return (
      <div className="AllCard">
        {appartementImg.map((sheet, index) => (
          <SlideProductsheep
            key={`${index}-${Math.random()}`}
            pictures={sheet.pictures[index]}
          />
        ))}
      </div>
    );
  }
}
export default ImgSlide;
