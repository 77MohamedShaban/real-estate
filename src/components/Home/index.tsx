import React, { useState } from "react";
import { cardsData } from "../../data";
import Search from "./Search";
import Navbar from "./Navbar";
import Card from "./card";
import "./index.scss";

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);

  return (
    <>
      <Navbar />

      <Search setSearchValue={setSearchValue} />

      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            id={card.id}
            title={card.title}
            image={card.image}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
