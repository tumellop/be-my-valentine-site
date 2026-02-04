import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const NO_PHRASES = [
  "No 💔", "Pretty please? 🥺", "But we'd be so cute together! 💕",
  "One more chance, pookie?", "Don't break my heart :(",
  "What about a maybe?", "Please don't do this to me, I'm fragile"
];

export default function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = (noClicks * 20) + 16;

  const handleNo = () => setNoClicks(prev => prev + 1);
  const handleYes = () => {
    setIsValentine(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div style={styles.container}>
      {!isValentine ? (
        <>
          <img src="https://media.tenor.com/VIChDQ6ejRQAAAAj/jumping-bear-hearts-no-png.gif" style={{ maxWidth: '80%', height: 'auto' }} alt="Cute bear" />
          <h1 style={styles.title}>Will you be my Valentine? 💘</h1>
          <div style={styles.btnGroup}>
            <button 
              onClick={handleYes} 
              style={{ ...styles.yesBtn, fontSize: `${yesButtonSize}px` }}
            >
              Yes
            </button>
            <button onClick={handleNo} style={styles.noBtn}>
              {noClicks === 0 ? "No" : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src="https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-with-kisses-bg.gif" alt="Bears kissing" />
          <div style={styles.successText}>Yay!!! 💖🎉</div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: { 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    width: "100%",
    height: "100vh", 
    fontFamily: "Arial, sans-serif", 
    textAlign: "center", 
    backgroundColor: "#fff0f3",
    padding: "20px",
    boxSizing: "border-box"
  },
  title: { 
    color: "#d63384", 
    margin: "20px 0",
    fontSize: "min(8vw, 2rem)" // Scales text based on screen size
  },
  btnGroup: { 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    gap: "10px", 
    flexWrap: "wrap" // Wraps buttons if they get too big for mobile
  },
  yesBtn: { 
    backgroundColor: "#28a745", 
    color: "white", 
    padding: "10px 20px", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer" 
  },
  noBtn: { 
    backgroundColor: "#dc3545", 
    color: "white", 
    padding: "10px 20px", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer", 
    fontSize: "16px" 
  },
  successText: { 
    fontSize: "min(12vw, 48px)", // Scales "Yay!" for mobile
    color: "#ff69b4", 
    fontWeight: "bold", 
    marginTop: "20px" 
  }
};
