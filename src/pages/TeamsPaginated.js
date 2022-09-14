import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useState } from "react"
import SearchFieldTeams from "../components/SearchFieldTeams"
import TeamsList from "../components/TeamsList"

function TeamsPaginated({ teams }) {
  const [page, setPage] = useState(1)
  const handleChange = (event, value) => {
    setPage(value)
  }

  const contentPerPage = 18
  const lastIndex = page * contentPerPage
  const firstIndex = lastIndex - contentPerPage

  const pageTeamsCount = Math.ceil(teams.length / contentPerPage)
  const paginatedArray = teams.slice(firstIndex, lastIndex)

  return (
    <>
      <SearchFieldTeams />
      <Stack spacing={2} alignItems="center">
        <TeamsList paginatedTeams={paginatedArray} />
        <Pagination
          size="large"
          count={pageTeamsCount}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  )
}

export default TeamsPaginated
