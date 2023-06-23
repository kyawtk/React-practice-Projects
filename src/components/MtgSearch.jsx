import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/mtgSearch.scss";

export default function MtgSearch() {
  const [selectedSet, setSelectedSet] = useState("");
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const [originalSets, setOriginalSets] = useState([]);
  const [sets, setSets] = useState([]);

  useEffect(() => {
    fetch("https://api.magicthegathering.io/v1/sets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.sets);
        setOriginalSets(data.sets);
        setSets(data.sets);
      });
  }, []);

  useEffect(() => {
    const filteredData = originalSets.filter((set) =>
      set.name.toLowerCase().includes(text.toLowerCase())
    );
    setSets(filteredData);
  }, [text, originalSets]);

  return (
    <div className="mtgContainer">
      <div className="left">
        <SetSearch text={text} handleTextChange={handleTextChange}></SetSearch>
        <div className="sets-container">
          {sets.map((set) => {
            return (
              <>
                <SetCard
                  key={set.code}
                  {...set}
                  onClick={() => {
                    setSelectedSet(set.code);
                  }}
                ></SetCard>
              </>
            );
          })}
        </div>
      </div>
      <div className="right">
        <CardContainer setCode={selectedSet}></CardContainer>
      </div>
    </div>
  );
}

function SetCard({ code, name, type, releaseDate, onClick }) {
  return (
    <div className="set-card" onClick={onClick}>
      <img src="" alt="" />
      <p>
        <b>{name}</b>
      </p>
      <p>Set Code : {code}</p>
      <p>Realease Date : {releaseDate}</p>
      <p>Type: {type}</p>
    </div>
  );
}

function SetSearch({ text, handleTextChange }) {
  return (
    <form action="#">
      <input
        type="text"
        onChange={handleTextChange}
        value={text}
        placeholder="Search Sets"
      />
    </form>
  );
}

function CardContainer({ setCode }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(`https://api.magicthegathering.io/v1/cards?set=${setCode}`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data.cards);
      });
  }, [setCode]);
  return (
    <>
      <button>BACK</button>
      {cards.map((card) => {
        return <img key={card.id} src={card.imageUrl} alt={card.name} />;
      })}
    </>
  );
}
