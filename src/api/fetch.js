/* eslint-disable import/prefer-default-export */
/* eslint-disable no-else-return */

const urlCompetitions = "http://api.football-data.org/v2/competitions/"

export const getLeagues = async () => {
  const response = await fetch(urlCompetitions, {
    headers: {
      "x-auth-token": process.env.REACT_APP_API_KEY
    }
  })

  if (response.ok) {
    const json = await response.json()
    return json
  } else {
    console.error("Что-то не так")
    return null
  }
}
