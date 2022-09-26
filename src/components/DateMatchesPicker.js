import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import "dayjs/locale/ru"

function DateMatchesPicker({ date, minDate, maxDate, updateDate, label }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
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
