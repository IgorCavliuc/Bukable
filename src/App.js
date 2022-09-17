import "./App.css";
import { useState, useEffect } from "react";
import Data from "./Component/Data/Data";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Persone from "./Component/Persone/Persone";
import PersoneDetale from "./Component/PersoneDetale/PersoneDetale";

function App() {
  const [state, setState] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const apiUrl = `http://localhost:3000/InfoPerson.json`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setState(repos.persons);
      });
  }, []);

  const onClickVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      <Header onClickVisible={onClickVisible} />
      <div className="container">
        <Navbar visible={visible} />
        <Data state={state} />
      </div>
    </div>
  );
}

export default App;
