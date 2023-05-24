import { Outlet } from "react-router-dom";
import SubMenu from "../layout/Navigation/SubMenu";

const AboutWrapper = () => {
  return (
    <section>
      <SubMenu />
      <Outlet />
    </section>
  );
};

export default AboutWrapper;
