import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Ratting from "./components/ratting/ratting";
import Result from "./components/result/result";

function App() {
  const [number, setNumber] = useState();
  const [result, setResult] = useState(true);
  return (
    <Pragment>
      {result ? (
        <Ratting
          number={number}
          setNumber={setNumber}
          result={result}
          setResult={setResult}
        />
      ) : (
        <Result number={number} />
      )}
    </Pragment>
  );
}

export default App;

const Pragment = styled.div`
  background-color: #131518;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
