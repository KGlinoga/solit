// import React, { useState, useEffect } from "react";
// import Shelf from "../../components/shelfCarousel/Shelf";
// import Api from "../../utils/Api";


// const Shelves = (props)=>{
//     const [shelves, setShelves]= useState('')

//     useEffect(()=>{
//         Api.getShelf(props.user.id).then(res=>res.json().then(data=>{
//             setShelves(data.shelves);
//         }))
//     },[props.user.id])

//    return(
//     <div>
//         <Shelf/>
//     </div>
//    )
// }

// export default Shelves;
import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '2rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

export default function FlexDirection() {
    return (
        <div style={{ width: '100%' }}>
           
            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 3,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            > 
               
                <Item>
                    <ImageList>
                        <img sx={{ width: 25, height: 50 }} src={`https://images-na.ssl-images-amazon.com/images/I/81GjCVSEDAL.jpg`}/>
                        <img sx={{ width: 25, height: 50 }} src={`https://images.squarespace-cdn.com/content/v1/58c180edff7c50dd0e51a2ad/1596042032039-IN7LLXRVDKGVC854LVHE/9780241375273.jpg`}/>
                    </ImageList>
                </Item>
                <Item>
                    <ImageList >
                        <img sx={{ width: 25, height: 50 }} src={`https://images-na.ssl-images-amazon.com/images/I/81MI6+TpYkL.jpg`}/>
                        <img sx={{ width: 25, height: 50 }} src={`https://media1.popsugar-assets.com/files/thumbor/c3wntNFJPuuLDUeh_VqtomS-NEQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/05/31/951/n/40891077/fe7618617b6fa1aa_mango/i/House-Mango-Street-Sandra-Cisneros.jpg`}/>
                    </ImageList>
            </Item>
                <Item>
                <ImageList>
                        <img sx={{ width: 25, height: 50 }}src={`https://images-na.ssl-images-amazon.com/images/I/811Hq4sgpSL.jpg`}/>
                        <img sx={{ width: 25, height: 50 }}src={`https://i.postimg.cc/XqMJvRsc/Screen-Shot-2022-09-07-at-11-36-13-PM-overlay.png`}/>

                </ImageList>
                </Item>
            </Box>

            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 3,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}
            > 
               
                <Item>
                    <ImageList>
                        <img sx={{ width: 25, height: 50 }} src={`https://images-na.ssl-images-amazon.com/images/I/716yWoZsqgL.jpg`}/>
                        <img sx={{ width: 25, height: 50 }} src={`https://images-na.ssl-images-amazon.com/images/I/91i056yWLiL.jpg`}/>
                    </ImageList>
                </Item>
                <Item>
                    <ImageList >
                        <img sx={{ width: 25, height: 50 }} src={`https://images-na.ssl-images-amazon.com/images/I/819IxwjBa9L.jpg`}/>
                        <img sx={{ width: 25, height: 50 }} src={`https://images-na.ssl-images-amazon.com/images/I/71aeF1gCqxL.jpg`}/>
                    </ImageList>
            </Item>
                <Item>
                <ImageList>
                        <img sx={{ width: 25, height: 50 }}src={`https://images-na.ssl-images-amazon.com/images/I/81ocyjjpE1L.jpg`}/>
                        <img sx={{ width: 25, height: 50 }}src={`https://i.postimg.cc/XqMJvRsc/Screen-Shot-2022-09-07-at-11-36-13-PM-overlay.png`}/>

                </ImageList>
                </Item>
            </Box>
        </div>
    );
}
