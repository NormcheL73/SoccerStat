import { Breadcrumbs, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import fixDateNumber from "../utils/fixDateNumber"
import getMatchesByLeagueCheck from "../utils/getMatchesByLeagueCheck"
import DataGridMatches from "../components/DataGridMatches"
import DateMatchesPicker from "../components/DateMatchesPicker"

function LeagueMatches({ league }) {
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)
  const [leagueMatches, setLeagueMatches] = useState([])
  const [dateFromString, setDateFromString] = useState("")
  const [dateToString, setDateToString] = useState("")

  useEffect(() => {
    const fetchDataLeagueMatches = async () => {
      const jsonLeagueMatches = await getMatchesByLeagueCheck(
        dateFromString,
        dateToString,
        league.id
      )
      if (!jsonLeagueMatches) return
      setLeagueMatches(jsonLeagueMatches.matches)
    }
    fetchDataLeagueMatches()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFromString, dateToString])

  const updateDateFrom = (newDate) => {
    setDateFrom(newDate)

    if (newDate !== null) {
      setDateFromString(
        `${newDate.$y}-${fixDateNumber(newDate.$M + 1)}-${fixDateNumber(
          newDate.$D
        )}`
      )
    }
  }

  const updateDateTo = (newDate) => {
    setDateTo(newDate)

    if (newDate !== null) {
      setDateToString(
        `${newDate.$y}-${fixDateNumber(newDate.$M + 1)}-${fixDateNumber(
          newDate.$D
        )}`
      )
    }
  }

  const updateLeagueMatches = (newLeagueMatches) => {
    setLeagueMatches(newLeagueMatches)
  }

  return (
    <Box sx={{ height: "70vh" }}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
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
      <DataGridMatches
        matches={leagueMatches}
        updateMatches={updateLeagueMatches}
      />
    </Box>
  )
}

export default LeagueMatches
