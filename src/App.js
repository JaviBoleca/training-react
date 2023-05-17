import "./App.css";
import furnitures from "./db/db.json";
import Search from "./components/Search/Search";
import CardsWrapper from "./components/Wrappers/CardsWrapper";
import Card from "./components/Card/Card";
import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState(furnitures);

  const handleSearch = (search) => {
    console.log("handleSearch", search);
    let filteredProducts = [];
    if (search[1] === "All" && search[0].length > 0) {
      filteredProducts = furnitures.filter((product) => {
        return product.productName
          .toLowerCase()
          .includes(search[0].toLowerCase());
      });
    } else if (search[1] === "All") {
      filteredProducts = furnitures;
    } else {
      if (search[0].length === 0) {
        filteredProducts = furnitures.filter((product) =>
          product.categories.find((category) => {
            return category === search[1];
          })
        );
      } else {
        filteredProducts = furnitures.filter((product) => {
          return (
            product.productName
              .toLowerCase()
              .includes(search[0].toLowerCase()) &&
            product.categories.find((category) => {
              return category === search[1];
            })
          );
        });
      }
    }
    console.log(filteredProducts);
    setProducts(filteredProducts);
  };

  return (
    <>
      <header>
        <Search onSearch={handleSearch} />
      </header>
      <main>
        <CardsWrapper>
          {(products.length > 0 &&
            products.map((product) => {
              return (
                <Card
                  key={product.id}
                  product={product.productName}
                  price={product.price}
                  categories={product.categories}
                />
              );
            })) || <div className="alert">No products availables.</div>}
        </CardsWrapper>
      </main>
    </>
  );
};

export default App;
