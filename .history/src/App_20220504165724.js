import { Body, Main, PokeDex } from "./Styles";
import Header from "./Header";
import Menu from "./Menu";
import { Routes, Link, Route} from "react-router-dom";

import Charmander from "./Telas/Charmander";
import Bulbasaur from "./Telas/Bulbasaur";
import Dragonite from "./Telas/Dragonite";
import Gengar from "./Telas/Gengar";
import Gyarados from "./Telas/Gyarados";

function App() {
  return (
    <>
      <Body>
        <Main>
          <PokeDex>
            <Routes>
            <Route path="/" element={<Header />} />
            <Route path="Charmander" element={<Charmander />} />
            <Route path="Bulbasaur" element={<Bulbasaur />} />
            <Route path="Dragonite" element={<Dragonite />} />
            <Route path="Gengar" element={<Gengar />} />
            <Route path="Gyarados" element={<Gyarados />} />
            </Routes>
            <Menu/>
          </PokeDex>
        </Main>
      </Body>
    </>
  );
}

export default App;
