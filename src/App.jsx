import "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ByGene from "./components/pages/ByGene.jsx";
import ByProtein from "./components/pages/ByProtein.jsx";
import GeneList from "./components/GeneList.jsx";
import IntroText from "./components/pages/IntroText.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroText />} />
        <Route path="/ByProtein" element={<ByProtein />} />
        <Route path="/GeneList" element={<GeneList />} />
        <Route path="/ByGene" element={<ByGene />} />
      </Routes>
    </Router>
  );
}

export default App;
