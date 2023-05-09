import Card from "./components/Card";
import freelance from "./db/freelance.json";

const App = () => {
  return (
    <>
      {freelance.map((card, index) => {
        return (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            lastname={card.lastname}
            role={card.role}
            fee={card.fee}
            reviews={card.reviews}
          />
        );
      })}
    </>
  );
};

export default App;
