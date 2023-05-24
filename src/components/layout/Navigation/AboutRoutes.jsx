import { Route, Routes } from "react-router-dom";
import AboutWrapper from "../../wrappers/AboutWrapper";
import About from "../../../views/About";
import NewAbout from "../../../views/NewAbout";
import NotFound from "../../../views/NotFound";

const AboutRoutes = () => {
  return (
    <Routes>
      <Route element={<AboutWrapper />}>
        <Route index element={<About />} />
        {/*index es la ruta por defecto. Rutas anidadas sustituidas por outlet*/}
        <Route path=":id" element={<About />} />
        <Route path="new" element={<NewAbout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AboutRoutes;
