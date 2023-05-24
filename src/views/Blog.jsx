import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  return (
    <>
      <h2>Blog</h2>
      <div>
        {id && (
          <>
            <h3>Publication {id}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corrupti, exercitationem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corrupti, exercitationem.
            </p>
          </>
        )}
        {!id && (
          <>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium, vel.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium, vel.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium, vel.
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
