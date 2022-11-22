import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <NavLink to="/"> Accueil </NavLink>
        <NavLink to="/Apropos"> A Propos </NavLink>
      </nav>
    </header>
  );
}
export default Header;
