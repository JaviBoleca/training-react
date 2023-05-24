import "./SubMenu.css";
import { Link } from "react-router-dom";

const SubMenu = () => {
  return (
    <ul className="submenu">
      <li>
        <Link to="me">Me</Link>
      </li>
      <li>
        <Link to="new">New About</Link>
      </li>
    </ul>
  );
};

export default SubMenu;
