import React from 'react';
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
import { Editor } from '@tinymce/tinymce-react';

const Form = () => {
  // export function CheckboxesGroup() {
    const [state, setState] = React.useState({

    })
    
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };
  const marks = [
    {
      value: 0,
      label: '🔥',
    },
    {
      value: 50,
      label: '🔥🔥',
    },
    {
      value: 100,
      label: '🔥🔥🔥',
    }
  ];
  function valuetext(value: number) {
    return `${value}°C`;
  }
  
  // export default function DiscreteSliderMarks() {
  
  return (
    <div className='title-spoilers'>
      <TextField fullWidth label="Title your review here" id="fullWidth" />
      <FormControlLabel control={<Checkbox />} label="Spoilers included?" />


    <div className='title-spoilers'>
      <TextField fullWidth
            id="outlined-multiline-flexible"
            label="Write your review here"
            multiline
            minRows={12}
            //  value={value}
            onChange={handleChange}/>
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

    <div className='emotions-intake'>
      <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Which emotions did this book bring up for you? Select as many as apply!</FormLabel>
          <FormGroup>
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
      </Box>
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
          defaultValue={50}
          getAriaValueText={valuetext}
          step={50}
          valueLabelDisplay="auto"
          marks={marks}
        />
        <Typography id="track-false-slider" gutterBottom>
        Characters
        </Typography>
        <Slider
          aria-label="Custom marks"
          defaultValue={50}
          getAriaValueText={valuetext}
          step={50}
          valueLabelDisplay="auto"
          marks={marks}
        />
      <Typography id="track-false-slider" gutterBottom>
          Accessibility
        </Typography>
        <Slider
          aria-label="Custom marks"
          defaultValue={50}
          getAriaValueText={valuetext}
          step={50}
          valueLabelDisplay="auto"
          marks={marks}
        />
        <Typography id="track-false-slider" gutterBottom>
          Pacing
        </Typography>
        <Slider
          aria-label="Custom marks"
          defaultValue={50}
          getAriaValueText={valuetext}
          step={50}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>

  <div className='add-submit-btns'>
        <Stack spacing={2} direction="row"> 
          <Button variant="outlined">Add to Shelf</Button>
          <Button variant="contained">Submit</Button>
        </Stack>

      </div>
        </div>
        </div>
        </div>
        </div>
  )
};

export default Form;