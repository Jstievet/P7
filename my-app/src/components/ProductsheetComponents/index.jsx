function ProductsheetComponent({ appart }) {
  const { title, location, tags, host } = appart;

  console.log("title", title);
  console.log("location", location);
  console.log("tags", tags);
  console.log("host", host);
  return (
    <div className="container_information">
      <div className="container_information_global">
        <div className="container_information_appartement">
          {title && <h1 className="container_information_appartement_title">{title}</h1>}
          
          <div className="container_information_appartement_location">
            {location && location}
          </div>
        </div>
        {(host && host.name) && <div className="container_owner_rating">{host.name}</div>}
        {(host && host.picture) && <picture src={host.picture} alt="photo proprio "></picture>}
        
        
      </div>
      <div>
        <div className="container_keyword">
          {tags && <ul>
            {tags.map((tag, index) => (
              <li key={`${index}-${Math.random()}`}>{tag}</li>
            ))}
          </ul>}
          
        </div>
      </div>
    </div>
  );
}
export default ProductsheetComponent;
