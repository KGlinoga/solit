// import React from "react";
// import "./style.css";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import { Diversity1 } from "@mui/icons-material";
// import { render } from "@testing-library/react";


// async function getList(){
//     let url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=qsZyKFClqN1bdC4fdxXUQXapePfmEEn9`;
    
//     try{
//         let res = await fetch(url);
//         return await res.json();
//     } catch(error){
//         console.log(error);
//     }
// }


// async function renderList(res){
//     let lists = await getList();
//     let html = '';
//     lists.forEach(book => {
//         let htmlSegment = ActionAreaCard(lists);
//         html += htmlSegment;
//     });
//     return html;
// }

// export default function List (){
//         return(
//                <div>
//                 renderList
//                </div>
//             );
//         }
        
// export default function ActionAreaCard(title, description, cover) {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//         <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//         />
//         <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//             ${results.books.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//             ${results.books.description}
//         </Typography>
//         </CardContent>
//         </CardActionArea>
//         </Card>
//     );
// }

// getList();
// renderList();