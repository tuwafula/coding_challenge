import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 200px
  width: 200px;
  flex-direction: column;
  align-items: center;
  transform: translateY(-35%) translateX(44.5%);
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
  color: #ff69b4;
  border: 5px solid rgb(252, 248, 248);
`;

const Line = styled.div`
  height: 100px;
  width: 3px;
  background-color: #ff69b4;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: 100px;
  width: 250px;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  box-shadow: 0 7px 10px rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    to right,
    #ff69b4,
    #e051a7,
    #c0399a,
    #a1208d,
    #800080
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
  color: #ff69b4;
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
  // background-color: #ff69b4;
  width: 200px;
  height: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  transform: translateY(258%);
  z-index: -1;
  position: absolute;

  background: linear-gradient(
    to right,
    #ff69b4,
    #e051a7,
    #c0399a,
    #a1208d,
    #800080
  );
`;

export default function PinkComponent() {
  return (
    <Container>
      <TextContainer>
        <NumContainer>02</NumContainer>
        <div style={{ padding: "0.2rem" }}>
          <Title>YOUR TITLE</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Assumenda
            error
          </Text>
        </div>
      </TextContainer>
      <Line></Line>
      <div>
        <Circle>
          <FontAwesomeIcon icon={faCog} />
        </Circle>
      </div>
      <SemiCircle></SemiCircle>
    </Container>
  );
}
