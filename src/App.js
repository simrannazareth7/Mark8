import React, { useState } from "react";
import "./styles.css";
const emojidic = {
  "🍓": "Strawberry",
  "🍒": "Cheery",
  "🍔": "burger",
  "🍕": "Pizza",
  "🍬": "Chocolate",
  "🍩": "Donut"
};
var color = "green";
var backcolor = "lightblue";
var emojilist = Object.keys(emojidic);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiclickhandle(emoji) {
    var meaning = emojidic[emoji];
    setMeaning(meaning);
  }
  function inputchange(event) {
    var userinput = event.target.value;
    var meaning = emojidic[userinput];
    if (meaning === undefined) {
      meaning = "oops!.. Sorry...This is not in our database";
    }
    setMeaning(meaning);
    //console.log(meaning);
  }
  return (
    <div className="App" style={{ backgroundColor: backcolor }}>
      <h1 style={{ color }}>Know you emoji!</h1>
      <input onChange={inputchange}></input>
      <h2>{meaning}</h2>
      <h3>Emojis We Know</h3>
      {emojilist.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclickhandle(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
