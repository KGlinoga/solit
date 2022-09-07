import React, {  useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import {Grid} from "@mui/material";
// import { Editor } from '@tinymce/tinymce-react';
// import './index.css';

const Form = (props) => {
  //set review text, ratings, book id, and user id
  const[review_text, setReviewText]=useState("")
  const[plot_rating, setPlotRating]=useState("")
  const [character_rating, setCharacterRating]=useState("")
  const [accessibility_rating, setAccessibilityRating]=useState("")
  const [pacing_rating, setPacingRating]=useState("")
  //these next two are currently not in our db but if they are added i'll uncomment them out
  const [review_title, setReviewTitle]=useState("")
  const [review_author, setReviewAuthor]=useState("")
  // do i need to make useStates for these two? or do they automatically get associated with the rest of the props?
  const [book_id, setBookId]=useState("")
  const [userId, setuserID]=useState("")
  // export function CheckboxesGroup() {
    // this section does the checkboxes 
    // const [state, setState] = React.useState({})
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //       setState({
    //         ...state,
    //         [event.target.name]: event.target.checked,
    //       });
    //     };
    
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  const submit=(e)=>{
    e.preventDefault();
    console.log(review_text)
    props.addReview(review_text, plot_rating, character_rating, accessibility_rating, pacing_rating, review_title, review_author, book_id, userId);
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
  function valuetext(value: number) {
    return `${value}°C`;
  }
  
  // export default function DiscreteSliderMarks() {
  
  return (
    
    <div className='title-spoilers'>
    <Grid item>
    <form onSubmit={submit}/>
    <TextField fullWidth label="Title your review here" id="reviewTitle" value={review_title} onChange={e=>setReviewTitle(e.target.value)} />
    <TextField fullWidth margin="normal" label="What name would you like associated with your review?" id="reviewAuthor" value={review_author} onChange={e=>setReviewAuthor(e.target.value)}/>
      <FormControlLabel control={<Checkbox />} label="Spoilers included?" id="spoliersBoolean"/>
      <TextField fullWidth
            id="reviewText"
            label="Write your review here"
            multiline
            margin="normal"
            minRows={12}
            //  value={value}
            //commenting this portion out, might affect handleChange function
            // onChange={handleChange}
            required value={review_text} onChange={e=>setReviewText(e.target.value)}/>
       </Grid>
      {/* <>
      <Editor
        apiKey='your-api-key'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
 */}

    {/* <div className='emotions-intake'>
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Which emotions did this book bring up for you? Select as many as apply!</FormLabel>
          <FormGroup id="emotionsForm">
            <FormControlLabel
              control={
                <Checkbox  onChange={handleChange} name="anger" />
              }
              label="Anger"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleChange} name="grief" />
              }
              label="Grief"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleChange} name="excitement" />
              }
              label="Excitement"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={handleChange} name="fear" />
              }
            label="Fear"
          />
            <FormControlLabel
              control={
                <Checkbox onChange={handleChange} name="Humor" />
              }
              label="Humor"
            />
              <FormControlLabel
              control={
                <Checkbox onChange={handleChange} name="joy" />
              }
              label="Joy"
            />
              <FormControlLabel
              control={
                <Checkbox onChange={handleChange} name="love" />
              }
              label="Love"
            />
            <FormControlLabel
                control={
              <Checkbox onChange={handleChange} name="suprise" />
              }
            label="Suprise"
            />
          </FormGroup>
        </FormControl>
      </Box> */}
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
         getAriaValueText={valuetext}
         step={20}
         valueLabelDisplay="auto"
         marks={marks}
         value={plot_rating} onChange={e=>setPlotRating(e.target.value)}
        />
        <Typography id="track-false-slider" gutterBottom>
        Characters
        </Typography>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={20}
          valueLabelDisplay="auto"
          marks={marks}
          value={character_rating} onChange={e=>setCharacterRating(e.target.value)}
        />
      <Typography id="track-false-slider" gutterBottom>
          Accessibility
        </Typography>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={20}
          valueLabelDisplay="auto"
          marks={marks}
          value={accessibility_rating} onChange={e=>setAccessibilityRating(e.target.value)}
        />
        <Typography id="track-false-slider" gutterBottom>
          Pacing
        </Typography>
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={20}
          valueLabelDisplay="auto"
          marks={marks}
          value={pacing_rating} onChange={e=>setPacingRating(e.target.value)}
        />
      </Box>

  <div className='add-submit-btns'>
        <Stack spacing={2} direction="row"> 
          {/* <Button variant="outlined" id="shelfBtn">Add to Shelf</Button> */}
          <Button variant="contained" id="submitBtn">Submit</Button>
        </Stack>

      </div>
        </div>
        </div>
       
  )
};

export default Form;