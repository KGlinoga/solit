import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Typography from "@mui/material/Typography";

const BookRatings = () => {
    const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
        color: "#ff6d75"
    },
    "& .MuiRating-iconHover": {
        color: "#ff3d47"
    }
    });

  const [avgPlotValue, setPlotValue] = React.useState();
  const [avgCharValue, setCharValue] = React.useState();
  const [avgAccValue, setAccValue] = React.useState();
  const [avgPacValue, setPacValue] = React.useState();

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 }
      }}
    >
      <Typography component="legend">Plot</Typography>
      <StyledRating
        name="customized-color"
        value={avgPlotValue}
        id="avgPlotValue"
        readOnly
        getLabelText={(value) => `${value} Flame${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">Characters</Typography>
      <StyledRating
        name="customized-color"
        id="avgCharValue"
        // value={value}
        value={avgCharValue}
        readOnly
        getLabelText={(value) => `${value} Flame${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">Accessibility</Typography>
      <StyledRating
        id="avgAccValue"
        value={avgAccValue}
        readOnly
        getLabelText={(value) => `${value} Flame${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">Pacing</Typography>
      <StyledRating
        name="customized-color"
        id="avgPacValue"
        value={avgPacValue}
        readOnly
        getLabelText={(value) => `${value} Flame${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}
export default BookRatings;