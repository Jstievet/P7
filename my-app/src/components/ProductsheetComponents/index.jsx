function ProductsheetComponent({ appart }) {
  const { title, location, tags, host } = appart;

  console.log("appart", host.picture);
  return (
    <div className="container_information">
      <div className="container_information_global">
        <div className="container_information_appartement">
          <h1 className="container_information_appartement_title">{title}</h1>
          <div className="container_information_appartement_location">
            {location}
          </div>
        </div>
        <div className="container_owner_rating">{host.name}</div>
        <picture src={host.picture} alt="photo proprio "></picture>
      </div>
      <div>
        <div className="container_keyword">
          <ul>
            {tags.map((tag, index) => (
              <li key={`${index}-${Math.random()}`}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductsheetComponent;
