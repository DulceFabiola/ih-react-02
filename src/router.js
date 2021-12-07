//Apreder React-router-dom
//-Crear rutas dentro de nuestra app
//-Aprender a utilizar Link para ir a las diferentes rutas
//Vamos a aprender sobre rutas nexteadas de la version 6
//Vamos a aprender a generar rutas con segmentos dinamicos.

//IMPORTACIONES

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Preguntas from "./components/Preguntas";
import About from "./components/About";
import Home from "./components/Home";
import Characters from "./pages/Characters";
import data from "./rickAndMorty.json";
import Character from "./pages/Character";

//Dummie components
//Funciones con retorno implicito (una sola linea)
// const About = () => <h1>About</h1>;
// const Home = () => <h1>Home</h1>;
//const Preguntas = () => <h1>Preguntas</h1>;
//o puedes utilizar las funciones tradicionales

// function Preguntas() {
//   return <h1>Preguntas</h1>;
// }
const Router = () => {
  return (
    //encerrado en un fragment o un div
    <>
      <BrowserRouter>
        {/* Contenedor que nos ayuda a manejar el cotenido de las rutas, api de historial de html5 para mantener agrupadas y ordenas las rutas  */}
        <Routes>
          {/* Routes agrupa las rutas */}
          {/* Atributo path:nombre de la ruta y element: componente a mostrar, componente invocado */}
          <Route path="/" element={<Layout />}>
            {/* Layout engloba a todas las rutas */}
            <Route path="/about" element={<About />} />
            <Route path="/preguntas" element={<Preguntas />} />
            {/* componente por defecto index */}
            <Route index element={<Home />} />
            <Route
              path="/characters"
              element={<Characters allCharacters={data} />}
            >
              <Route path=":id" element={<Character allCharacters={data} />} />
            </Route>
            {/* ruta con segmentos dinamicos */}
            <Route path="*" element={<h1>404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
