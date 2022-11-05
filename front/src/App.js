import logo from "./logo.svg";
import "./App.css";
import Landing from "./routes/Landing";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainConfig from "./routes/MainConfig";
import PlaceSelector from "./components/PlaceSelector";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/place" element={<PlaceSelector />}></Route>
        <Route path="/config" element={<MainConfig />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
