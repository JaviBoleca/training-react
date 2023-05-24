import { Link } from "react-router-dom";


const Aside = () => {
  return (
  <>
  <h2>Blog Post</h2>
  <ul>
    <li><Link to="/blog/1">Post 1</Link>
    </li>
    <li><Link to="/blog/2">Post 2</Link></li>
    <li><Link to="/blog/3">Post 3</Link></li>
  </ul>
  </>
  );
};

export default Aside;
