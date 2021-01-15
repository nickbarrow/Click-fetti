import React from "react"
import PartyButton from "./PartyButton"
import "./styles.scss"

var confettiTypes = [
  ['🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🔺', '🔶', '🔷'],
  ['🥜'],
  ['💖', '🧡', '💛', '💚', '💙', '💜'],
  ['💵', '💳', '💲', '🤑', '💰']
]

export default function App() {
  return (
    <div className="App">
      <PartyButton text="🥳 Party on!" confetti={confettiTypes[0]} />
      
      <PartyButton text="💖" confetti={confettiTypes[2]} />

      <PartyButton text="Add to Cart" confetti={confettiTypes[3]} />
    </div>
  );
}
