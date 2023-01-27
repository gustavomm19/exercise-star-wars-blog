import React, { useEffect, useState } from "react";
import CharacterCard from "../component/character-card.jsx";
import "../../styles/home.css";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getCharacters();
  }, []);
  
  const getCharacters = async () => {
    const res = await fetch("https://www.swapi.tech/api/people/");
    const data = await res.json();

    const allUrls = data.results.map(({ url }) => fetch(url).then(res => res.json()))
    const values = await Promise.all(allUrls);

    setCharacters(values.map((val) => val.result.properties));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-danger">Characters</h2>
      <div
        className="mt-4 d-flex"
        style={{
          // padding: '0 20px',
          whiteSpace: "nowrap",
          width: "100%",
          overflowX: "auto",
        }}
      >
        <CharacterCard name="JAVA THE HUT" gender="HUT" hair="HUT" eye="HUT" />
        <CharacterCard
          name="Luke Skywalker"
          gender="Male"
          hair="Blonde"
          eye="Blue"
        />
        <CharacterCard
          name="Luke Skywalker"
          gender="Male"
          hair="Blonde"
          eye="Blue"
        />
        <CharacterCard
          name="Luke Skywalker"
          gender="Male"
          hair="Blonde"
          eye="Blue"
        />
        <CharacterCard
          name="Luke Skywalker"
          gender="Male"
          hair="Blonde"
          eye="Blue"
        />
        <CharacterCard
          name="Luke Skywalker"
          gender="Male"
          hair="Blonde"
          eye="Blue"
        />
        <CharacterCard
          name="Luke Skywalker"
          gender="Male"
          hair="Blonde"
          eye="Blue"
        />
      </div>
    </div>
  );
};
