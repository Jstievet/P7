import "../styles/style.css";
import Card from "../components/Card/appartementCard";
import Banner from "../components/Banner/index";
import bannerHome from "./../asset/bannerHome.png";

function Home() {
  return (
    <main>
      <div className="App">
        <Banner urlImage={bannerHome} text="Chez vous, partout et ailleurs" />
      </div>
      <div className="Container-card">
        <Card />
      </div>
    </main>
  );
}

export default Home;
