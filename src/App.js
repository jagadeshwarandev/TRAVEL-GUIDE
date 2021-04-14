import React from "react";
import "./styles.css";
import { useState } from "react";

const travelDB = {
  GOA: [
    { name: "Dudhsagar Waterfalls", rating: "4/5" },
    { name: "Baga Beach", rating: "3.5/5" },
    { name: "Hammerzz Nightclub", rating: "3.5/5" }
  ],

  KANYAKUMARI: [
    {
      name: "Thiruvalluvar Statue",
      rating: "5/5"
    },
    {
      name: "Thirparappu Falls",
      rating: "4/5"
    },
    {
      name: "Mathur Aqueduct",
      rating: "3.5/5"
    }
  ],
  KERALA: [
    {
      name: "Alleppey",
      rating: "3.5/5"
    },
    {
      name: "Vagamon",
      rating: "5/5"
    },
    {
      name: "Athirappilly Waterfalls",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("GOA");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>✈️ WANDERLUST-TRAVELER</h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Checkout my favorite travel spots. Select a places to get started{" "}
      </p>

      <div>
        {Object.keys(travelDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selectedGenre].map((travel) => (
            <li
              key={travel.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {travel.name} </div>
              <div style={{ fontSize: "smaller" }}> {travel.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
