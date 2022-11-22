import { useState } from "react";
import vectorup from "./../../asset/VectorUp.png";
function Collapse(props) {
  const { title, text } = props;

  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  //collapse_individuel
  return (
    <section
      className={open ? "collapse_individuel_open" : "collapse_individuel"}
    >
      <div className="collapse_button" onClick={toggle}>
        <div>{title}</div>{" "}
        <div>
          <img src={vectorup} alt="" />
        </div>
      </div>
      <div className="collapse_text">{text}</div>
    </section>
  );
}
export default Collapse;
