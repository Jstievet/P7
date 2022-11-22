function Banner(props) {
  const { urlImage, text } = props;
  return (
    <div className="container-banner">
      <div className="banner" style={{ backgroundImage: `url(${urlImage})` }}>
        {" "}
      </div>
      {text && <p className="bannerText">{text}</p>}
    </div>
  );
}

export default Banner;
