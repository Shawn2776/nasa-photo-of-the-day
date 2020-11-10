import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

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
    <div className="container">
      <h1>Nasa Photo of the Day</h1><br />
      <Card inverse className="cardBody">
        <CardImg width="30%" src={nasaData.hdurl} alt={nasaData.title} />
        <CardImgOverlay className="cardBody">
          <CardTitle tag="h2">{nasaData.title}</CardTitle>
          <CardText>{nasaData.explanation}</CardText>
          <CardText>
            <small className="text-muted">Copyright: {nasaData.copyright}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
  

}