import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { ruRU } from "@mui/material/locale"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

const theme = createTheme({}, ruRU)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
