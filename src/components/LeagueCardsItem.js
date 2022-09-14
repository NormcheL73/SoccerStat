import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material"
import { Link } from "react-router-dom"
import noImage from "../images/noimage.png"

function LeagueCardsItem({ leagueId, name, country, areaFlag }) {
  // eslint-disable-next-line no-param-reassign
  if (!areaFlag) areaFlag = noImage

  const leagueLink = `/leagues/${leagueId}/matches`

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea component={Link} to={leagueLink}>
          <CardMedia
            component="img"
            height="135"
            image={areaFlag}
            alt="League flag"
          />
          <CardContent>
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
            <Typography align="center" variant="body2" color="text.secondary">
              {country}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default LeagueCardsItem
