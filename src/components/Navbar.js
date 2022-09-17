import { SportsSoccer } from "@mui/icons-material"
import { AppBar, IconButton, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(value)
  }

  const handleClick = () => {
    setValue(0)
  }

  return (
    <AppBar position="static" sx={{ flexDirection: "row" }}>
      <IconButton
        component={Link}
        to="/SoccerStat"
        onClick={handleClick}
        sx={{ ml: "1rem" }}
      >
        <SportsSoccer fontSize="large" sx={{ color: "white" }} />
      </IconButton>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{ sx: { bgcolor: "white" } }}
        sx={{ ml: "1rem" }}
      >
        <Tab label="Лиги" to="/SoccerStat" component={Link} />
        <Tab label="Команды" to="/teams" component={Link} />
      </Tabs>
    </AppBar>
  )
}

export default Navbar
