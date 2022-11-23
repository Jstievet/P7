import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  const LinkID = "/Productsheet/" + id;

  return (
    <Link to={LinkID}>
      <div className="AppartementCard">
        <img src={cover} alt="appartement" />
        <span className="AppartementCard_title">{title}</span>
      </div>
    </Link>
  );
}

export default Card;
