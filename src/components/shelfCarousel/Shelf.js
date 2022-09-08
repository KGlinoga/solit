import React from 'react';
// import Carousel from 'react-material-ui-carousel'
import Carousel from 'better-react-carousel';
import { Paper } from '@mui/material'
// import { View, Image, StyleSheet } from 'react-native';

function Shelf(props)
{
    var items = [
        {
            bookTitle: "Title #1",
            description: "Lorem Ipsum"
        },
        {
            name: "Title #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}
// import * as React from 'react';
// import Box from '@mui/material/Box';

// export default function BoxSx() {
//   return (
//     <Box
//       sx={{
//         width: 300,
//         height: 300,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//   );
// }

// import React from 'react'
// import Carousel from 'better-react-carousel'
// <img width="100%" alt="" src="https://images-na.ssl-images-amazon.com/images/I/81MI6+TpYkL.jpghotos/800/600?random=1" />

// function Shelf () {

//   return ( 
    
//     <Carousel cols={2} rows={1} gap={10} loop>
//       <Carousel.Item>
//         <img width="100%" alt="" src="https://images-na.ssl-images-amazon.com/images/I/81MI6+TpYkL.jpghotos/800/600?random=1" />
//         <Carousel.Caption>
//           <h3 id='bookTitle'></h3>
//           <p id='bookAuthor'></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" alt="" src="https://images-na.ssl-images-amazon.com/images/I/81S-NIf8yrL.jpg" />
//         <Carousel.Caption>
//           <h3 id='bookTitle'></h3>
//           <p id='bookAuthor'></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%"alt=""  src="http://prodimage.images-bn.com/pimages/9780060837020_p0_v1_s1200x630.jpg" />
//         <Carousel.Caption>
//           <h3 id='bookTitle'></h3>
//           <p id='bookAuthor'></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img width="100%" alt="" src="http://prodimage.https://images-na.ssl-images-amazon.com/images/I/71BheRVw5ZL.jpg" />
//         <Carousel.Caption>
//           <h3 id='bookTitle'></h3>
//           <p id='bookAuthor'></p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//   )}
export default Shelf;