import "./App.css";
import CardWrapper from "./components/Card/CardWrapper";
import CardImg from "./components/Card/CardImg";
import CardInfo from "./components/Card/CardInfo";
import CardsContainer from "./components/Card/CardsContainer";
import { freelancers } from "./db/freelancers";

function App() {
  return (
    <CardsContainer>
      {freelancers.map((freelancer) => {
        return (
          <CardWrapper key={freelancer.id}>
            <CardImg img={freelancer.img}></CardImg>
            <CardInfo
              title={freelancer.title}
              last_name={freelancer.last_name}
              fee={freelancer.fee}
              reviews={freelancer.reviews}
            ></CardInfo>
          </CardWrapper>
        );
      })}
    </CardsContainer>
  );
}

export default App;
