/* eslint-disable import/prefer-default-export */
/* eslint-disable no-else-return */
// const API_KEY = "31ecc933a000480b84bc05f930ac794a"

const urlCompetitions = "http://api.football-data.org/v4/competitions/"

export const getData = async () => {
  const response = await fetch(urlCompetitions)

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    console.error("Что-то не так")
    return null
  }
}
