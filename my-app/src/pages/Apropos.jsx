import Banner from "../components/Banner/index";
import bannerApropos from "./../asset/bannerApropos.png";
import Collapse from "../components/Collapse";
import { getData } from "../API";
import { useEffect, useState } from "react";

function Apropos() {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    getData("./about.json").then((data) => {
      setAbout(data);
    });
  }, []);
  return (
    <main>
      <section>
        <div className="App">
          <Banner urlImage={bannerApropos} />
        </div>
        <div className="collapse_about">
          {about.map((aboutData, index) => (
            <Collapse
              key={`${index}-${Math.random()}`}
              title={aboutData.aboutTitle}
              text={aboutData.aboutText}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Apropos;
