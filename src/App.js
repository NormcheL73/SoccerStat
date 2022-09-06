import "./App.css"
import Button from "@mui/material/Button"
import ezhik from "./images/ezhik.jpg"

function App() {
  return (
    <div className="App">
      <h1>ХаюхайТест</h1>
      <img src={ezhik} alt="Картинка ёжика" />
      <Button variant="outlined">Test mui</Button>
    </div>
  )
}

export default App
