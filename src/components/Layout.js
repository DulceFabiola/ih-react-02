//SPA single page aplication
//Outelet-->salida, se transforma en el componente a renderizar segun la ruta
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Indicarle a donde con uyn to */}
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/preguntas">
            Preguntas
          </Link>
          <Link className="nav-link" to="/characters">
            Characters
          </Link>
        </div>
      </nav>
      {/* Este Outlet se convierte en nuestros componentes hijos de nuestra ruta padre */}
      <Outlet />
    </>
  );
};

export default Layout;
