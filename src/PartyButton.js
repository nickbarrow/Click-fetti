import React from 'react'

export default function PartyButton (props) {
  var party = (e) => {
    if (document.body.animate)
      for (var i = 0; i < 20; i++)
        createConfetti(e.clientX, e.clientY + window.scrollY);
  }

  var createConfetti = (x, y, confettis) => {
    var particle = document.createElement('particle');
    document.body.appendChild(particle);
    // Pick a random type of confetti from options array passed from props.
    particle.innerHTML = props.confetti[Math.floor(Math.random() * props.confetti.length)];
    // Give each confetti a random size.
    particle.style.fontSize = `${Math.random() * 0 + 10}px`;

  // Subtract 0.5 to get even dispersement in both directions.
    var xDest = (Math.random() - 0.5) * 200,
      yDest = (Math.random() - 0.5) * 200,
      rotation = Math.random() * 200,
      duration = Math.random() * 1750,
      easing = 'cubic-bezier(0, 0.5, 0.5, 1)',
      delay = Math.random() * 75;

    var animation = particle.animate([
      { transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1 },
      { transform: `translate(-50%, -50%) translate(${x + xDest}px, ${y + yDest}px) rotate(${rotation}deg)`,
        opacity: 0 }
    ], { duration, easing, delay });
    animation.onfinish = removeParticle;
  }

  var removeParticle = (e) => { e.srcElement.effect.target.remove(); }
  
  return (
    <div className="party-button" onClick={(e) => { party(e) }}>
      <span role="img" aria-label="Smiley Face with Party Hat">
        {props.text}</span>
    </div>
  )
}