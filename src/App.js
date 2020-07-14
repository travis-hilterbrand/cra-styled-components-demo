import React from "react";
import styled from "styled-components";

import "./App.css";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <Title>Hello World, this is my first styled component!</Title>
    </div>
  );
}

export default App;
