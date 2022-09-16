import { getMathcesByLeague } from "../api/fetch"

const getMathcesByLeagueCheck = (stringDateFrom, stringDateTo, leagueId) => {
  if (stringDateFrom.length === 10 && stringDateTo.length === 10) {
    return getMathcesByLeague(leagueId, stringDateFrom, stringDateTo)
  } else {
    return getMathcesByLeague(leagueId, "", "")
  }
}

export default getMathcesByLeagueCheck
