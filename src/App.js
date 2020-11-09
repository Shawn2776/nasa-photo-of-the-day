import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {

  const [ nasaData, setNasaData ] = useState([])
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// https://api.nasa.gov/planetary/apod?api_key=mEYe2vfodAXchwQgESvVzD8bg8LYoFJludunywaH
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
    .then((res) => {
      setNasaData(res.data)
    })
    .catch((err) => {
      alert('Help')
    })
  }, [])

  return (
    <div className="app">
      <h1>{nasaData.title}</h1>
      <div className="image"><img src={nasaData.url} alt={nasaData.copyright} width="300"></img></div>
      <h2>{nasaData.date}</h2>
      <div className="explanation">{nasaData.explanation}</div>

    </div>
  );
}