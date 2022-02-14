import { Routes, Route, } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import TourDetails from './components/tourDetails/TourDetails.js'

const travelData = require("./data/db.json");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home jsonData={travelData} />} />
        <Route path="/city/:id" element={<TourDetails jsonData={travelData} />} />
      </Routes>
    </>
  );
}

export default App;
