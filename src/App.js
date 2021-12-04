import React from "react";
import "./styles.css";
import { useState } from "react";
const goodBook = {
  javaScript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't know JS", rating: "3.5/5" }
  ],
  function: [
    { name: "Shiva Trilogy", rating: "5/5" },
    { name: "Harry potter and the sorcerer's Stone" }
  ],
  business: [
    { name: "Never split the diffrence", rating: "3.5/5" },
    { name: "Loonshots", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");

  function ClickHandler(name) {
    setGenre(name);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(goodBook).map((name) => (
          <button onClick={() => ClickHandler(name)}>{name}</button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {goodBook[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}>{book.name} </div>
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
