import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrapper>
      <ItemText>
        <h1>Model S</h1>
        <p>Schedule a test drive</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>Explore inventory</LeftButton>
        <RightButton>Test Drive</RightButton>
      </ButtonGroup>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15vh;
  padding-bottom: 5vh;
`;

const ItemText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  padding: 4px 24px;
  height: 40px;
  width: 256px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  opacity: 0.95;
  font-size: 14px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(244, 244, 244, 0.65);
  color: rgba(23, 26, 32, 0.8);
`;
