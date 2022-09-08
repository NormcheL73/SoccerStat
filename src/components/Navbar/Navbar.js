import { AppBar, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [value, setValue] = useState(1)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        TabIndicatorProps={{ sx: { bgcolor: "white" } }}
      >
        <Tab label="Лиги" to="/SoccerStat" component={Link} />
        <Tab label="Команды" to="/teams" component={Link} />
      </Tabs>
    </AppBar>
  )
}

export default Navbar
