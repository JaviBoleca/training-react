import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/Navigation/NavBar";
import Aside from "./components/layout/Navigation/Aside";
import MainRoutes from "./components/layout/Navigation/MainRoutes";

const App = () => {
  return (
    <>
      <header>
        <h1>React Router DOM</h1>
        <NavBar />
      </header>
      <main>
        <aside>
          <Routes>
            <Route path="/blog" element={<Aside />}>
              <Route path=":id" element={<Aside />} />
            </Route>
          </Routes>
        </aside>
        <div className="container">
          <MainRoutes />
        </div>
      </main>
    </>
  );
};

export default App;
