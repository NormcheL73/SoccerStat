import "./App.css"
// import { useEffect } from "react"
import { Box, Container } from "@mui/system"
import Navbar from "./components/Navbar"
import SearchField from "./components/SearchField"
import Routing from "./components/Routing"
// import { getData } from "./api/fetch"

function App() {
  // const [competitionsName, setCompetitions] = useState("")

  // const url = "https://api.github.com"

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(url)

  //     if (response.ok) {
  //       const json = await response.json()
  //       console.log("🚀 ~ file: App.js ~ line 19 ~ fetchData ~ json", json)
  //     } else {
  //       console.error("Что-то не так")
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="App">
      <Navbar />
      <Box display="flex" flexDirection="column" padding="1rem">
        <Container>
          <SearchField />
          <Routing />
        </Container>
      </Box>
    </div>
  )
}

export default App
