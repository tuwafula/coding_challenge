import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 200px
  width: 200px;
  flex-direction: column;
  align-items: center;
  transform: translateY(30%) translateX(88.8%); 
  position: relative;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  font-size: 3rem;
  background: linear-gradient(
    to bottom,
    #c4c4c4,
    #d2d2d2,
    #e1e1e1,
    #f0f0f0,
    #ffffff
  );
  color: #ff0000;
  border: 5px solid rgb(252, 248, 248);
`;

const Line = styled.div`
  height: 100px;
  width: 3px;
  background-color: #ff0000;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: 100px;
  width: 250px;
  // background-color: #ff0000;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    to right,
    #ff0000,
    #ff0441,
    #ff2d6d,
    #ff4d93,
    #ff69b4
  );
`;

const NumContainer = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  font-size: 3rem;
  font-weight: bold;
  color: #ff0000;
  box-shadow: 7px 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.p`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0.2rem;
`;

const Text = styled.p`
  margin-top: 0;
  color: white;
  font-size: 0.8rem;
`;

const SemiCircle = styled.div`
  // background-color: #ff0000;
  width: 200px;
  height: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  transform: translateY(-43%);
  z-index: -1;
  position: absolute;
  background: linear-gradient(
    to right,
    #ff0000,
    #ff0441,
    #ff2d6d,
    #ff4d93,
    #ff69b4
  );
`;

// border-top-left-radius: 70%;
//   border-top-right-radius: 70%;

export default function OrangeComponent() {
  return (
    <Container>
      <SemiCircle></SemiCircle>
      <div>
        <Circle>
          <FontAwesomeIcon icon={faLightbulb} />
        </Circle>
      </div>
      <Line></Line>
      <TextContainer>
        <NumContainer>01</NumContainer>
        <div style={{ padding: "0.2rem" }}>
          <Title>YOUR TITLE</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Assumenda
            error
          </Text>
        </div>
      </TextContainer>
    </Container>
  );
}
