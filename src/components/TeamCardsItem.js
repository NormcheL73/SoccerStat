import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography
} from "@mui/material"
import { Container } from "@mui/system"
import { Link } from "react-router-dom"
import noImage from "../images/noimage.png"

function TeamCardsItem({ name, teamFlag, teamId }) {
  // eslint-disable-next-line no-param-reassign
  if (!teamFlag) teamFlag = noImage

  const teamLink = `/teams/${teamId}/matches`

  return (
    <Grid item xs={12} sm={6} md={2}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea component={Link} to={teamLink}>
          <CardContent>
            <Typography
              align="center"
              variant="body1"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {name}
            </Typography>
          </CardContent>
          <Container
            component="img"
            src={teamFlag}
            alt="Team flag"
            sx={{ height: 170, width: 200, pb: "1rem" }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default TeamCardsItem
