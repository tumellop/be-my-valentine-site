import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const NO_PHRASES = [
  "No, in this economy? 💔", 
  "Ops, wrong button💕", 
  "Are you sure?🥺", 
  "Please,I'm begging you", 
  "What about a maybe?", 
  "One more chance, pookie?", 
  "You leave me no choice pooks"
];

export default function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = (noClicks * 20) + 16;

  const gifIndex = noClicks === 0 ? 0 : Math.min(noClicks, 7);
  const currentGif = `/gifs/${gifIndex}.gif`; 

  useEffect(() => {
      const imagesToPreload =["/gifs/0.gif", "/gifs/1.gif", "/gifs/2.gif", "/gifs/3.gif", "/gifs/4.gif", "/gifs/5.gif", "/gifs/6.gif", "/gifs/7.gif", "/gifs/success.gif"];
      imagesToPreload.forEach((image) => {
          const newImage = new Image();
          newImage.src = image;
      });
  }, []);

  const handleNo = () => setNoClicks(prev => prev + 1);
  const handleYes = () => {
    setIsValentine(true);
    confetti({ particleCount: 150, spread: 70 });
  };

  return (
    <div style={styles.container}>
      {!isValentine ? (
        <>
          {/* VIDEO/GIF SECTION */}
          <div style={styles.gifContainer}>
            <img 
              src={currentGif} 
              alt="Valentine GIF" 
              style={styles.gif} 
            />
          </div>

          <h1 style={styles.title}>Will you be my Valentine? 💘</h1>
          
          <div style={styles.btnGroup}>
            <button 
              onClick={handleYes} 
              style={{ ...styles.yesBtn, fontSize: `${yesButtonSize}px` }}
            >
              Yes
            </button>
            
            {noClicks < NO_PHRASES.length + 1 && (
              <button onClick={handleNo} style={styles.noBtn}>
                {noClicks === 0 ? "No" : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          {/* SUCCESS SECTION */}
          <img src="/gifs/success.gif" alt="Success" style={styles.gif} />
          <div style={styles.successText}>I knew you'd say yes!🥰</div>
          
          {/* TICKET SECTION */}
          <div style={styles.ticket}>
            <div style={styles.ticketTitle}>🎟️ Valentine's Ticket</div>
            <div style={styles.ticketInfo}><strong>Date:</strong> Feb 14, 2026</div>
            <div style={styles.ticketInfo}><strong>Time:</strong> 7:00 PM</div>
            <div style={styles.ticketInfo}><strong>Location:</strong> It's a surprise! 🤫</div>
            <div style={styles.ticketInfo}><strong>Admit:</strong> 1 Cutie</div>
            
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {/* CALENDAR BUTTON */}
              <a 
                href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260214T190000%0ADTEND:20260214T220000%0ASUMMARY:Valentine's Date%0ALOCATION:Secret Location%0ADESCRIPTION:Date Night!%0AEND:VEVENT%0AEND:VCALENDAR" 
                download="valentine-date.ics"
                style={{ textDecoration: 'none' }}
              >
                <button style={styles.calendarBtn}>📅 Add to Calendar</button>
              </a>

              {/* WHATSAPP BUTTON */}
              <a 
                href="https://wa.me/?text=I%20said%20YES!%20See%20you%20on%20the%2014th!%20%F0%9F%92%96"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={styles.shareBtn}>💌 Send Response</button>
              </a>
            </div>
          </div>
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
    height: "100dvh",       // <--- CHANGED: "dvh" fits mobile screens perfectly
    width: "100vw",         
    fontFamily: "Arial, sans-serif", 
    textAlign: "center", 
    backgroundColor: "#fdcece", 
    padding: '20px', 
    boxSizing: 'border-box', 
    overflow: 'hidden'       
  },
  
  gifContainer: {
    width: '300px',
    height: '290px',        // <--- CHANGED: Reduced from 320px to 200px to remove top space
    display: 'flex',
    alignItems: 'flex-end', // Keeps penguins close to text
    justifyContent: 'center', 
    marginBottom: '0px'     // Removed margin since the box has enough space
  },
  
  gif: {
    maxWidth: '100%', 
    maxHeight: '100%',
    objectFit: 'contain' 
  },
  
  title: { 
    color: "black", 
    margin: "10px 0",       // Keep this small to keep text close to penguins
    fontSize: "2.5rem", 
    fontWeight: "bold"
  },
  
  // ... (keep the rest of your button and ticket styles the same) ...
  btnGroup: { display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap" },
  yesBtn: { backgroundColor: "#28a745", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", transition: 'all 0.3s ease', fontWeight: "bold" },
  noBtn: { backgroundColor: "#dc3545", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "18px", fontWeight: "bold"},
  successText: { fontSize: "48px", color: "black", fontWeight: "bold", marginTop: "20px"},
  ticket: { backgroundColor: "white", padding: "20px", borderRadius: "15px", marginTop: "20px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", textAlign: "left", width: "min(300px, 90vw)", border: "2px dashed #ff1493", position: "relative" },
  ticketTitle: { fontSize: "18px", fontWeight: "bold", color: "#ff1493", marginBottom: "10px", textTransform: "uppercase", borderBottom: "1px solid #ddd", paddingBottom: "5px" },
  ticketInfo: { fontSize: "16px", color: "#333", margin: "5px 0" },
  calendarBtn: { padding: "10px 20px", backgroundColor: "black", color: "white", border: "none", borderRadius: "20px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" },
  shareBtn: { padding: "10px 20px", backgroundColor: "#25D366", color: "white", border: "none", borderRadius: "20px", cursor: "pointer", fontSize: "14px", fontWeight: "bold" }
};