import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@mui/material"
import { Link } from "react-router-dom"
import footballImage from "../images/футбольчик.jpg"

function LeagueCardsItem({ name, country }) {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to="/teams">
          <CardMedia
            component="img"
            height="140"
            image={footballImage}
            alt="green iguana"
            to="/teams"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {country}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default LeagueCardsItem
