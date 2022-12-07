import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";

function Header() {
  return (
    <header>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@100;300;400;700&display=swap');
      </style>
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <NavLink to="/"> Accueil </NavLink>
        <NavLink to="/Apropos"> A Propos </NavLink>
      </nav>
    </header>
  );
}
export default Header;
