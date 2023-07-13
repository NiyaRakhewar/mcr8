import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { EventDetails } from "./components/EventDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
