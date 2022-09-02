import React, {useState} from "react";
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from './Form';

function AddReview (){
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>+ Add Review</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form />
        </Box>
      </Modal>
    </div>
  );
// }

// <Stack
//   direction="column"
//   justifyContent="center"
//   alignItems="center"
//   spacing={2}
// >

//  <div>
//         <button onClick={() => setOpenModal(true)} 
//         className='modalButton'>
//           + Add Review
//         </button>
//           <Modal 
//           open={openModal} 
//           onClose={() => setOpenModal(false)}  />
//       </div>

// </Stack>
//
  }

export default AddReview;