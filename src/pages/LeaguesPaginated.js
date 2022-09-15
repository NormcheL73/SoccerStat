/* eslint-disable no-else-return */
import { Typography } from "@mui/material"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import { useState } from "react"
import LeaguesList from "../components/LeaguesList"
import SearchField from "../components/SearchField"
import filterData from "../utils/filterData"

function LeaguesPaginated({ leagues }) {
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)
  }

  const updateQuery = (newQuery) => {
    setQuery(newQuery)
  }

  const dataFiltered = filterData(query, leagues)
  const contentPerPage = 12
  const lastIndex = page * contentPerPage
  const firstIndex = lastIndex - contentPerPage

  const pageLeaguesCount = Math.ceil(dataFiltered.length / contentPerPage)
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
            Лиги с таким названием нет в базе
          </Typography>
        ) : (
          <>
            <LeaguesList paginatedLeagues={paginatedArray} />
            <Pagination
              size="large"
              count={pageLeaguesCount}
              page={page}
              onChange={handleChange}
            />
          </>
        )}
      </Stack>
    </>
  )
}

export default LeaguesPaginated
