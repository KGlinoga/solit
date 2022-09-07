import * as React from 'react';
// import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
// import Api from '../../utils'


 function UserReviews() {
  // const [userId, setUserId] = useState("")
  // const [review_text, setReviewTest] = useState("")
  // useEffect(()=>)
  return (
    <div style={{ width: '100%' }}>

      <Box id="reviewUserName"
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '200',
        }}
      >
        {"BookLover"}
        <Box id="reviewText"
        sx={{
          display: 'inline-flex',
          flexDirection: 'column',
          m: 1,
          p: 1,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '200',
        }}
      >
        {"Sample text for user review: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "}
      </Box>
      </Box>
    </div>
  );
}

export default UserReviews;