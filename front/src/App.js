import logo from "./logo.svg";
import "./App.css";
import Landing from "./routes/Landing";
import Output from "./routes/Output";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainConfig from "./routes/MainConfig";
import PlaceSelector from "./components/PlaceSelector";
import { VidStateProvider } from "./VidState";

function App() {
  return (
    <VidStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/place" element={<PlaceSelector />}></Route>
          <Route path="/config" element={<MainConfig />}></Route>
          <Route path="/output" element={<Output />}></Route>
        </Routes>
      </Router>
    </VidStateProvider>
  );
}

export default App;
