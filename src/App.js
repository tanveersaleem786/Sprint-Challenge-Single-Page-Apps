import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";



export default function App() {
  return (
    <main>
      <Header />
      <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/characters">Characters</Link>
        </div>
      <Route path='/' exact>
        <WelcomePage />
      </Route>

      <Route path='/characters'>
        <CharacterList />
      </Route>
    </main>
  );
}