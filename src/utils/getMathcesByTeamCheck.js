import { getMathcesByTeam } from "../api/fetch"

const getMathcesByTeamCheck = (stringDateFrom, stringDateTo, teamId) => {
  if (stringDateFrom.length === 10 && stringDateTo.length === 10) {
    return getMathcesByTeam(teamId, stringDateFrom, stringDateTo)
  } else {
    return getMathcesByTeam(teamId, "", "")
  }
}

export default getMathcesByTeamCheck
