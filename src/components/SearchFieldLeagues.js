import { Search } from "@mui/icons-material"
import { IconButton, TextField } from "@mui/material"
import { useState } from "react"

function SearchFieldLeagues() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <TextField
      type="search"
      label="Поиск лиги..."
      variant="outlined"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{ mb: "1.5rem", width: 300 }}
      InputProps={{
        endAdornment: (
          <IconButton type="sumbit" aria-label="search">
            <Search />
          </IconButton>
        )
      }}
    />
  )
}

export default SearchFieldLeagues
