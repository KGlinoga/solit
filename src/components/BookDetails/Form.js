import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import { Grid } from "@mui/material";
// import AddReview from './Page';
import Api from '../../utils/Api';
import {useParams} from 'react-router-dom';
import { IntegrationInstructionsRounded } from "@mui/icons-material";

const Form = () => {
  const {id} = useParams();

  //set review text, ratings, book id, and user id
  const [review_text, setReviewText] = useState("")
  const [plot_rating, setPlotRating] = useState("")
  const [character_rating, setCharacterRating] = useState("")
  const [accessibility_rating, setAccessibilityRating] = useState("")
  const [pacing_rating, setPacingRating] = useState("")
  //these next two are currently not in our db but if they are added i'll uncomment them out
  const [review_title, setReviewTitle] = useState("")
  const [review_author, setReviewAuthor] = useState("")

  // console.log(review_text)
  // console.log(plot_rating)
  // console.log(character_rating)
  // console.log(accessibility_rating)
  // console.log(pacing_rating)
  // console.log(review_author)
  // console.log(review_title)
  // do i need to make useStates for these two? or do they automatically get associated with the rest of the props?


  const submit = (e) => {
    // take info from book page, search db for book that match both title and author (GET ONE -- API.getBook find one book based on title/author OR openlibrary key )
    // if returns, take book id from result (foundBook)
    // if it doesn't
    // post independent of review, post book to our database so it exists and can have a review associated
    // 
    e.preventDefault();
    
    console.log({id});
    let token =  localStorage.getItem('token');
    //post functionality
    Api.addReview( review_title, review_author, review_text, plot_rating, character_rating, accessibility_rating,pacing_rating,id, token)

    //response.id
  }

  const marks = [
    {
      value: 20,
      // scaledValue: ,
      label: '🔥',
    },
    {
      value: 40,
      // scaledValue: 40,
      label: '',
    },
    {
      value: 60,
      // scaledValue: 60,
      label: '🔥🔥',
    },
    {
      value: 80,
      // scaledValue: 80,
      label: '',
    },
    {
      value: 100,
      // scaledValue: 100,
      label: '🔥🔥🔥',
    }
  ];

  // function valuetext(value: number) {
  //   return `${value}°C`;
  // }

  // export default function DiscreteSliderMarks() {

  return (

    <div className='title-spoilers'>
      <form onSubmit={submit}>
        <Grid item>
          <TextField fullWidth label="Title your review here" id="reviewTitle" value={review_title} onChange={e => setReviewTitle(e.target.value)} />
          <TextField fullWidth label="What name would you like associated with your review?" id="reviewAuthor" value={review_author} onChange={e => setReviewAuthor(e.target.value)} />
          <FormControlLabel control={<Checkbox />} label="Spoilers included?" id="spoliersBoolean" />
          <TextField fullWidth
            id="reviewText"
            label="Write your review here"
            multiline
            margin="normal"
            minRows={4}
            //  value={value}
            //commenting this portion out, might affect handleChange function
            // onChange={handleChange}
            required value={review_text} onChange={e => setReviewText(e.target.value)} />
        </Grid>

        <div className='sliders'>
          <Box sx={{ width: 300 }}>
            <Typography id="track-false-slider" gutterBottom>
              How would you rate these elements in the book?
            </Typography>
            <Typography id="track-false-slider" gutterBottom>
              Plot
            </Typography>
            <Slider
              aria-label="Custom marks"
              defaultValue={0}
              // getAriaValueText={valuetext}
              step={20}
              valueLabelDisplay="auto"
              marks={marks}
              value={+plot_rating} onChange={e => setPlotRating(e.target.value)}
            />
            <Typography id="track-false-slider" gutterBottom>
              Characters
            </Typography>
            <Slider
              aria-label="Custom marks"
              defaultValue={0}
              // getAriaValueText={valuetext}
              step={20}
              valueLabelDisplay="auto"
              marks={marks}
              value={+character_rating} onChange={e => setCharacterRating(e.target.value)}
            />
            <Typography id="track-false-slider" gutterBottom>
              Accessibility
            </Typography>
            <Slider
              aria-label="Custom marks"
              defaultValue={0}
              // getAriaValueText={valuetext}
              step={20}
              valueLabelDisplay="auto"
              marks={marks}
              value={+accessibility_rating} onChange={e => setAccessibilityRating(e.target.value)}
            />
            <Typography id="track-false-slider" gutterBottom>
              Pacing
            </Typography>
            <Slider
              aria-label="Custom marks"
              defaultValue={0}
              // getAriaValueText={valuetext}
              step={20}
              valueLabelDisplay="auto"
              marks={marks}
              value={+pacing_rating} onChange={e => setPacingRating(e.target.value)}
            />
          </Box>

          <div className='add-submit-btns'>
            <Stack spacing={2} direction="row">
              {/* <Button variant="outlined" id="shelfBtn">Add to Shelf</Button> */}
              <Button type="submit" variant="contained" id="submitBtn">Submit</Button>
            </Stack>

          </div>

        </div>
      </form>
    </div >

  )
};

export default Form;