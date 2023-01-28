import React, { useEffect, useState, useContext } from "react";
import CharacterCard from "../component/character-card.jsx";
import PlanetCard from "../component/planet-card.jsx";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(false);
  const [loadingPlanets, setLoadingPlanets] = useState(false);
  useEffect(() => {
    getCharacters();
    getPlanets();
  }, []);

  const getCharacters = async () => {
    try {
      setLoadingCharacters(true);
      const res = await fetch("https://www.swapi.tech/api/people/");
      const data = await res.json();

      const allUrls = data.results.map(({ url }) =>
        fetch(url).then((res) => res.json())
      );
      const values = await Promise.all(allUrls);

      setCharacters(values.map((val) => {
        return { id: val.result.uid, ...val.result.properties };
      }));
      setLoadingCharacters(false);
    } catch (e) {
      console.log(e);
      setLoadingCharacters(false);
    }
  };

  const getPlanets = async () => {
    try {
      setLoadingPlanets(true);
      const res = await fetch("https://www.swapi.tech/api/planets/");
      const data = await res.json();

      const allUrls = data.results.map(({ url }) =>
        fetch(url).then((res) => res.json())
      );
      const values = await Promise.all(allUrls);

      setPlanets(values.map((val) => {
        return { id: val.result.uid, ...val.result.properties };
      }));
      setLoadingPlanets(false);
    } catch (e) {
      console.log(e);
      setLoadingPlanets(false);
    }
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
        {loadingCharacters && '...Loading'}
        {characters.map((element) => (
          <CharacterCard
            name={element.name}
            gender={element.gender}
            hair={element.hair_color}
            eye={element.eye_color}
            id={element.id}
          />
        ))}
      </div>
      <h2 className="text-danger">Planets</h2>
      <div
        className="mt-4 d-flex"
        style={{
          // padding: '0 20px',
          whiteSpace: "nowrap",
          width: "100%",
          overflowX: "auto",
        }}
      >
        {loadingPlanets && '...Loading'}
        {planets.map((element) => (
          <PlanetCard
            name={element.name}
            population={element.population}
            terrain={element.terrain}
            id={element.id}
          />
        ))}
      </div>
    </div>
  );
};
