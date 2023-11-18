// src/App.js
import React, { useState } from "react";
import "./sentimentAna.css";

function SentimentAna() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState("");

  const analyzeSentiment = () => {
    // You can implement your sentiment analysis logic here
    // For this example, let's assume a simple rule-based approach
    if (text.toLowerCase().includes("happy")) {
      setSentiment("😃 Happy");
    } else if (text.toLowerCase().includes("sad")) {
      setSentiment("😢 Sad");
    } else {
      setSentiment("😐 Neutral");
    }
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>Sentiment Analyzer</h1>
    //     <textarea
    //       placeholder="Enter text for sentiment analysis..."
    //       value={text}
    //       onChange={(e) => setText(e.target.value)}
    //     ></textarea>
    //     <button onClick={analyzeSentiment}>Analyze</button>
    //     {sentiment && <div className="result">{sentiment}</div>}
    //   </header>
    // </div>
    <div className="landing-page">
      <header>
        <h1>Sentiment Analyzer for Brands</h1>
        <p>Understand the sentiment of people for the Brand.</p>
      </header>
      <section>
        <p>
          Analyze the sentiment of people and discover whether it's happy, sad,
          or neutral.
        </p>
        <p>Get started by entering Brand Name in the analyzer tool below.</p>
      </section>
      <footer>
        <p>Ready to get started?</p>
        <button>Try it now</button>
      </footer>
      {/* <div class="tilted-container">
        <div class="tilted-background"></div>
        <div class="content-container">
          <div class="content">
            <h1>Your Content Goes Here</h1>
            <p>This is a tilted div with content at the bottom.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default SentimentAna;
