import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { Dayjs } from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
// import { Editor } from '@tinymce/tinymce-react';
import './index.css';

const DiaryForm = () => {
  // export function CheckboxesGroup() {
    const [state, setState] = React.useState({

    })
    
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // const [dateValue, setValue] = React.useState<Dayjs | null>(null);

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setState({
    //     ...state,
    //     [event.target.name]: event.target.checked,
    //   });
    // };
  
  // export default function DiscreteSliderMarks() {

    // const [value, setValue] = React.useState<Dayjs | null>(
    //   dayjs('2014-08-18T21:11:54'));
  
    // const handleDateChange = (newValue: Dayjs | null) => {
    //   setValue(newValue);
    // };
  
  
  return (
    <div className='title-spoilers'>
      <h3 id='header'>Daily Diary</h3>
      <TextField margin="normal" fullWidth label="Title your entry here" id="diaryTitle" />
      <TextField margin="dense" fullWidth label="What book are you currently reading?" id="bookTitle" />
      
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        dateValue={dateValue}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}

    <div className='title-spoilers'>
      <TextField margin="normal" fullWidth
            id="diaryText"
            label="What would you like to write?"
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
        
  <div className='add-submit-btns'>
        <Stack spacing={2} direction="row"> 
          <Button variant="contained">Submit</Button>
        </Stack>

      </div>
        </div>
        </div>

  )
};

export default DiaryForm;