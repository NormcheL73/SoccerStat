import { Search } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"

function SearchField() {
  return (
    <TextField
      type="search"
      label="Поиск..."
      variant="outlined"
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
