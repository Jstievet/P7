import starGrey from "./../../asset/starGrey.png";
import starRed from "./../../asset/starRed.png";

function ProductsheetComponent({ appart }) {
  const { title, location, tags, host, rating } = appart;

  return (
    <div className="container_information">
      <div className="container_information_global">
        <div className="container_information_appartement">
          {title && (
            <h1 className="container_information_appartement_title">{title}</h1>
          )}

          <div className="container_information_appartement_location">
            {location && location}
          </div>
          {tags && (
            <div className="container_tags">
              <ul>
                {tags.map((tag, index) => (
                  <li key={`${index}-${Math.random()}`}>{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="container_information_star_owner">
          <div className="container_stars">
            <ul>
              <li>
                <img src={starGrey} alt="etoile"></img>
                {rating > 0 && (
                  <img className="stars_red" src={starRed} alt="etoile"></img>
                )}
              </li>
              <li>
                <img src={starGrey} alt="etoile"></img>
                {rating > 1 && (
                  <img className="stars_red" src={starRed} alt="etoile"></img>
                )}
              </li>
              <li>
                <img src={starGrey} alt="etoile"></img>
                {rating > 2 && (
                  <img className="stars_red" src={starRed} alt="etoile"></img>
                )}
              </li>
              <li>
                <img src={starGrey} alt="etoile"></img>
                {rating > 3 && (
                  <img className="stars_red" src={starRed} alt="etoile"></img>
                )}
              </li>
              <li>
                <img src={starGrey} alt="etoile"></img>
                {rating > 4 && (
                  <img className="stars_red" src={starRed} alt="etoile"></img>
                )}
              </li>
            </ul>
          </div>
          <div className="container_owner">
            {host && host.name && (
              <div className="container_owner_name">{host.name}</div>
            )}
            {host && host.picture && (
              <img src={host.picture} alt="photo propriétaire"></img>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsheetComponent;
