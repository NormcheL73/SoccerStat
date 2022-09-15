import { Breadcrumbs, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import DateMatchesPicker from "./DateMatchesPicker"

function LeagueMatches({ league }) {
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)

  let dateFromString = ""
  const updateDateFrom = (newDate) => {
    setDateFrom(newDate)
    console.log(
      "🚀 ~ file: LeagueMatches.js ~ line 13 ~ updateDateFrom ~ newDate",
      newDate
    )
    if (newDate !== null) {
      dateFromString = `${newDate.$y}-${newDate.$M + 1}-${newDate.$D}`
    } else {
      dateFromString = "пусто"
    }
    console.log(
      "🚀 ~ file: LeagueMatches.js ~ line 14 ~ updateDateFrom ~ dateFromString",
      dateFromString
    )
  }

  const updateDateTo = (newDate) => {
    setDateTo(newDate)
  }

  return (
    <>
      <Breadcrumbs separator=">" aria-label="bredcrumb">
        <Link to="/SoccerStat">
          <Typography variant="h6">Лиги</Typography>
        </Link>
        <Typography variant="h6">{league.name}</Typography>
      </Breadcrumbs>
      <Typography variant="h4" sx={{ mt: 3, mb: 1 }}>
        Матчи
      </Typography>
      <DateMatchesPicker
        label="с"
        date={dateFrom}
        updateDate={updateDateFrom}
        maxDate={dateTo}
      />
      <DateMatchesPicker
        label="по"
        date={dateTo}
        updateDate={updateDateTo}
        minDate={dateFrom}
      />
    </>
  )
}

export default LeagueMatches
