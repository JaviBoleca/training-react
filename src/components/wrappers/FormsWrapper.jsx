import { Outlet } from "react-router-dom";

const FormsWrapper = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffaaaa",
        borderRadius: "0.3rem",
        padding: "1rem",
      }}
    >
      <Outlet context={"Hello World"} />
    </section>
  );
};

export default FormsWrapper;
