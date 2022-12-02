import { useState } from "react";
import vectorup from "./../../asset/VectorUp.png";
function Collapse(props) {
  const { title, text } = props;

  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  // //collapse_individuel

  return (
    <section
      className={open ? "collapse_individuel_open" : "collapse_individuel"}
    >
      <div className="collapse_button" onClick={toggle}>
        <div>{title}</div>{" "}
        <div className="vector">
          <img
            className={open ? "vector_down" : "vector_up"}
            src={vectorup}
            alt=""
          />
        </div>
      </div>
      <div className="collapse_text">
        {typeof text === "object" ? (
          <ul>
            {text.map((li, index) => (
              <li key={`${index}-${Math.random()}`}>{li}</li>
            ))}
          </ul>
        ) : (
          <p>{text}</p>
        )}
      </div>
    </section>
  );
}

export default Collapse;
