import { NavLink } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <p className="error_number">404</p>
      <p className="error_text">Oups la page que vous demandez n'existe pas</p>
      <NavLink to="/" className="error_text_return">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default Error;
