import React from "react";
// import StepLayout from "./components/StepLayout";
import styled from "styled-components";
import OrangeComponent from "./components/OrangeComponent";
import PinkComponent from "./components/PinkComponent";
import PurpleComponent from "./components/PurpleComponent";
import BlueComponent from "./components/BlueComponent";
import GreenComponent from "./components/GreenComponent";
// import CircleIcon from "./components/CircleIcon";
// import TextBoxComponent from "./components/TextBoxComponent";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
`;

const App = () => {
  const steps = [
    {
      color: "red",
      icon: "💡",
      title: "YOUR TITLE",
      text: "Lorem ipsum dolor sit amet...",
    },
    {
      color: "purple",
      icon: "⚙️",
      title: "YOUR TITLE",
      text: "Lorem ipsum dolor sit amet...",
    },
    {
      color: "blue",
      icon: "🎯",
      title: "YOUR TITLE",
      text: "Lorem ipsum dolor sit amet...",
    },
    {
      color: "teal",
      icon: "$",
      title: "YOUR TITLE",
      text: "Lorem ipsum dolor sit amet...",
    },
    {
      color: "green",
      icon: "📈",
      title: "YOUR TITLE",
      text: "Lorem ipsum dolor sit amet...",
    },
  ];
  return (
    <Container>
      <OrangeComponent />
      <PinkComponent />
      <PurpleComponent />
      <BlueComponent />
      <GreenComponent />
    </Container>
  );
};

export default App;
