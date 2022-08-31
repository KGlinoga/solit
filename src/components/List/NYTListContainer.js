import "./style.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React from "react";
import {Grid} from "@mui/material";
import { Container } from "@mui/system";



export default class FetchNytList extends React.Component{
    state = {
        loading: true,
        list: [],
    };

    async componentDidMount() {
        const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=qsZyKFClqN1bdC4fdxXUQXapePfmEEn9";
        const response = await fetch (url);
        const data = await response.json();
        console.log(data);
        const bookArray = data.results.books;
        const bookElements = bookArray.map((book)=>{
            return(
                <div>
                    
                    <Container>
                    <Card item key={book.primary_isbn10} sx={{width: 350, backgroundColor: "#FCB29C", boxShadow: '3px 5px #C86F53', elevation:5, marginBottom:3}}>
                    <CardContent>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="500"
                        image={book.book_image}
                        alt="Book cover"
                        />
                        
                        <Typography gutterBottom variant="h5" component="div">
                            {book.title} 
                        </Typography>
                        <Typography>
                        {book.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {book.description}
                        </Typography>
                        
                    </CardActionArea>
                    </CardContent>
                    </Card>
                    </Container>
                   
                </div>
            );
        })
        this.setState({list: bookElements})
        this.setState({loading: false});
    }

    render() {
        return(
            <div>
                {this.state.loading?(
                    <div>Loading you the hottest reads</div>
                ):(
                    <div>
                        <h1 class ="headernyt">This week's NYT Best Sellers</h1>
                           
                            <Container sx={{display: "flex"}} >
                            <Grid container direction="row"  sx={{display:"flex"}} justifyContent="space-evenly">
                                {this.state.list}
                            </Grid>
                            </Container>
                            
                           
                    </div>
                )}
            </div>
        )
        
    }
}
