import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../db/db.json";
import "./Home.css"

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // detecta el parametro de la url
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (searchParams.has("page")) {
      let page = parseInt(searchParams.get("page"));
      if (page < 2) {
        setPage(1);
      } else if (page > 8) {
        setPage(8);
      } else {
        setPage(page);
      }
    }
  }, [searchParams]);

  return (
    <>
      <div className="user">
        <h2>Home</h2>
        <h3>User: {db[page-1].id}</h3>
        <ul>
          <li key={db[page - 1].id}>
            <ul>
              <li>
                <strong>Name:</strong> {db[page - 1].first_name}
              </li>
              <li>
                <strong>Last Name:</strong> {db[page - 1].last_name}
              </li>
              <li>
                <strong>Email:</strong> {db[page - 1].email}
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <Link to={`/?page=${page - 1}`}>Prev</Link>
      <Link to={`/?page=${page + 1}`}>Next</Link>
    </>
  );
};

export default Home;
