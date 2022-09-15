import { Typography } from "@mui/material"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useState } from "react"
import SearchField from "../components/SearchField"
import TeamsList from "../components/TeamsList"
import filterData from "../utils/filterData"

function TeamsPaginated({ teams }) {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
  }

  const updateQuery = (newQuery) => {
    setQuery(newQuery)
  }

  const dataFiltered = filterData(query, teams)
  const contentPerPage = 18
  const lastIndex = page * contentPerPage
  const firstIndex = lastIndex - contentPerPage

  const pageTeamsCount = Math.ceil(dataFiltered.length / contentPerPage)
  const paginatedArray = dataFiltered.slice(firstIndex, lastIndex)

  return (
    <>
      <SearchField query={query} updateQuery={updateQuery} />
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "83vh" }}
      >
        {!paginatedArray.length ? (
          <Typography variant="h5">
            Команды с таким названием нет в базе
          </Typography>
        ) : (
          <>
            <TeamsList paginatedTeams={paginatedArray} />
            <Pagination
              size="large"
              count={pageTeamsCount}
              page={page}
              onChange={handleChange}
            />
          </>
        )}
      </Stack>
    </>
  )
}

export default TeamsPaginated
