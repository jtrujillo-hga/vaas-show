import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import bgImage from "../img/landing-image.jpg"
import Header from "../components/Header";
import dogVid from "../video/dog.mp4";
import Calendly from "../components/Calendly";

function LandingPage() {
  return (
    
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      height: "100vh"
    }} className="d-flex flex-column">
      <Header />
      <Container style={{flex: 1}}>
        <div className="h-100 d-flex flex-column justify-content-center">
          <div className="text-light w-lg-75">
            <h1 className="display-4">VaaS.show Explained</h1>
          </div>
          <div class="embed-responsive embed-responsive-16by9 h-75 w-75">
            <iframe class="embed-responsive-item" src={dogVid} allowfullscreen></iframe>
          </div>
          {/* <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%" ,
              paddingTop: 25,
              height: 0
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "75%",
                height: "75%"
              }}
              src={dogVid}
              frameBorder="0"
            />
            </div> */}
          
        </div>
        
      </Container>

    </div>
    
  );
}

export default LandingPage;