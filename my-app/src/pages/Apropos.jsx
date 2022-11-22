import Banner from "../components/Banner/index";
import bannerApropos from "./../asset/bannerApropos.png";
import Collapse from "../components/Collapse";

function Apropos() {
  return (
    <div>
      <main>
        <div className="App">
          <Banner urlImage={bannerApropos} />
        </div>
        <div className="collapse">
          <Collapse title="Fiabilité" text="blablablablabla blbablablablabla" />
          <Collapse
            title="Respect"
            text="la bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateform"
          />
          <Collapse title="Fiabilité" text="blablablablabla blbablablablabla" />
          <Collapse title="Fiabilité" text="blablablablabla blbablablablabla" />
        </div>
      </main>
    </div>
  );
}
export default Apropos;
