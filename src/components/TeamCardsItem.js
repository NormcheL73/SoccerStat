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

function TeamCardsItem({ name, teamFlag }) {
  // eslint-disable-next-line no-param-reassign
  if (!teamFlag) teamFlag = noImage
  return (
    <Grid item xs={12} sm={6} md={2}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea component={Link} to="/teams">
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
            sx={{ height: 150, width: 180, pb: "1rem" }}
          />
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default TeamCardsItem
