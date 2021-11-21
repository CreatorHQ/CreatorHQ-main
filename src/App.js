import Nav from "./Components/Nav";
import Home from "./pages/Home";
import Creator from "./pages/Creator";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:creatorname" element={<Creator />} />
      </Routes>
    </Router>
  );
}

export default App;
