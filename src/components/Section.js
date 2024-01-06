import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
}) {
  return (
    <Wrapper background={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </ItemText>
      <ButtonGroup>
        <LeftButton>{leftButtonText}</LeftButton>
        {rightButtonText ? <RightButton>{rightButtonText}</RightButton> : null}
      </ButtonGroup>
    </Wrapper>
  );
}

export default Section;

const Wrapper = styled.section`
  width: calc(100vw - 10px);
  height: 100vh;
  background: url(${props => props.background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15vh;
  padding-bottom: 5vh;
  scroll-snap-align: center;
`;

const ItemText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 38px;
  }
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
