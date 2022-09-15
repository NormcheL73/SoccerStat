import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

function DateMatchesPicker({ date, minDate, maxDate, updateDate, label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        inputFormat="DD.MM.YYYY"
        value={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={updateDate}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
      />
    </LocalizationProvider>
  )
}

export default DateMatchesPicker
