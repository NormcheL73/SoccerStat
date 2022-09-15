import { Search } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"

function SearchField({ query, updateQuery }) {
  return (
    <TextField
      type="search"
      label="Поиск..."
      variant="outlined"
      value={query}
      onChange={(e) => updateQuery(e.target.value)}
      sx={{ mb: "1.5rem", width: 300 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        )
      }}
    />
  )
}

export default SearchField
