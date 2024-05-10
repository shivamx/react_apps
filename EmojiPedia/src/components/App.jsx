import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function createEmojiCard(emoji) {
  return (
    <Emoji 
    key= {emoji.id}
    name={emoji.name} 
    emoji={emoji.emoji} 
    meaning={emoji.meaning}>
    </Emoji>);
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEmojiCard)}
      </dl>
    </div>
  );
}

export default App;
