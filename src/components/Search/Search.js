import { TextField } from "@mui/material"

function Search() {
  return (
    <TextField
      type="search"
      label="Поиск..."
      variant="outlined"
      sx={{ mb: "1.5rem", width: 300 }}
    />
  )
}

export default Search
