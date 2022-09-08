import "./App.css"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Leagues from "./pages/Leagues/Leagues"
import Teams from "./pages/Teams/Teams"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/SoccerStat" element={<Leagues />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<Leagues />} />
      </Routes>
    </div>
  )
}

export default App
