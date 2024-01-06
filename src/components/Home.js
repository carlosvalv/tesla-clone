import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

function Home() {
  return (
    <Container>
      <Section
        title="Model Y"
        description="Schedule a test drive"
        leftButtonText="Faster Delivery"
        rightButtonText="Custom order"
        backgroundImage="/images/model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Schedule a test drive"
        leftButtonText="Custom order"
        rightButtonText="Learn more"
        backgroundImage="/images/model-3.jpg"
      />
      <Section
        title="Model S"
        leftButtonText="Explore inventory"
        rightButtonText="Test Drive"
        backgroundImage="/images/model-s.jpg"
      />
      <Section
        title="Model X"
        leftButtonText="Explore inventory"
        rightButtonText="Test Drive"
        backgroundImage="/images/model-x.jpg"
      />
      <Section
        title="Solar and Powerwall"
        description="Power Everything"
        leftButtonText="Learn More"
        backgroundImage="/images/solar-panel.jpg"
      />
      <Section
        title="Accessories"
        leftButtonText="Shop Now"
        backgroundImage="/images/accessories.jpg"
      />
    </Container>
  );
}

export default Home;
