import { SportsSoccer } from "@mui/icons-material"
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar position="static" sx={{ height: 56 }}>
      <Toolbar>
        <SportsSoccer fontSize="large" />
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
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
