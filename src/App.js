import React from "react";
import DogDetails from "./components/DogDetails";
import DogList from "./components/DogList";
import { Router } from "@reach/router";
import Favorites from "./components/Favorites";
function App() {
  return (
    <div className="App">
      <Router>
        <DogList path="/" />
        <DogDetails path="/breed/:breedid" />
        <Favorites path="/favorites" />
      </Router>
    </div>
  );
}

export default App;
