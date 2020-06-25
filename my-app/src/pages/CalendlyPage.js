import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import bgImage from "../img/landing-image.jpg"
import Header from "../components/Header";
import dogVid from "../video/dog.mp4";
import Calendly from "../components/Calendly";

function CalendlyPage() {
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      height: "100vh"
    }} className="d-flex flex-column">
      <Header />
      <br></br>
      <div className="h-100 w-100 d-flex justify-content-center">
        <Calendly />
      </div>

    </div>
    
  );
}

export default CalendlyPage;