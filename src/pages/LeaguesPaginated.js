import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useState } from "react"
import LeaguesList from "../components/LeaguesList"

function LeaguesPaginated({ leagues }) {
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }

  if (!leagues.length) return null

  const contentPerPage = 12
  const lastIndex = page * contentPerPage
  const firstIndex = lastIndex - contentPerPage

  const pageLeaguesCount = Math.ceil(leagues.length / contentPerPage)
  const paginatedArray = leagues.slice(firstIndex, lastIndex)

  return (
    <Stack spacing={2} alignItems="center">
      <LeaguesList paginatedLeagues={paginatedArray} />
      <Pagination
        size="large"
        count={pageLeaguesCount}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  )
}

export default LeaguesPaginated
