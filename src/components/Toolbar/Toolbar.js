import  ThemedButton  from "../Button/ThemedButton";

const Toolbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#8eb0aa",
        display: "flex",
        justifyContent: "center",
        padding: "2em 0",
        borderRadius: ".4rem",
      }}
    >
      <ThemedButton />
    </div>
  );
};

export default Toolbar;
