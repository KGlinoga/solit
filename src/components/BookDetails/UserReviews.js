import * as React from 'react';
// import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import Api from '../../utils/Api';
// import { DiscFull } from '@mui/icons-material';


function UserReviews() {
  // const [userId, setUserId] = useState("")
  const[reviews, setReviews] = useState("")
  // const[reviewTitle, setReviewTitle] = useState('');
  // const[reviewAuthor, setReviewAuthor] =useState('');
  // const[reviewText, setReviewText] = useState('');

  const {id} = useParams();
  // console.log(id)

  useEffect(()=>{
    Api.getReviews(id).then(res => res.json().then(data => {
      setReviews(data);
      // console.log(data)
      // setReviewTitle(data.review_title);
      // setReviewAuthor(data.review_author);
      // setReviewText(data.review_text);

    }))
  }, [id])

  return (
    <div>
    {reviews.length!==0?(
    <div style={{ width: '100%' }}>
      {reviews.map((review) => (
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
        {review.review_author}
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
        {review.review_text}
      </Box>
      </Box>
        ))} 
    </div>
    ):(
      <div>
        <h4>No reviews yet! Be the first!
        </h4>
      </div>
    )}
    </div>
  );
}

export default UserReviews;