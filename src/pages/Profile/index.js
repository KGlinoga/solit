import Api from '../../utils/Api';
import { Divider, Grid, Paper, Typography, Link } from "@mui/material";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router";


const Profile = () => {
    const {id} =useParams();
    const [email, setEmail]= useState('');
    const [shelfs, setShelves]=useState('');
    // const [followers, setFollowers]=useState('');
    const [username, setUsername]=useState('');
    // const[description, setDescription]=useState('');
    // const [dailyDairies, setDailyDairies]=useState('');
    const [profilePicURL, setProfilePicURL] = useState('');

    useEffect(()=>{
        Api.getUserById(id).then(res=>res.json()).then(data=>{
            setEmail(data.email);
            // setFollowers(data.);
            setShelves(data.userShelves);
            setUsername(data.username);
            // setDescription(data.)
            setProfilePicURL(data.profilePicURL);
        })
    },[id])

    const imgStyle = {width: 50, height:50, borderRadius: "80px"}
    const paperStyle={padding: 10, margin:"20px 20px" }
    const paperStyle2={padding: 20, margin:"20px 20px" }

    return(
       <Grid container align="center" justifyContent="space-between">
            <Grid item xs={12}>
                <Paper style={paperStyle}>
                    {/* this is the profile image when Cloudinary is in, replace that URL with the app generated thing*/}
                    <img style={imgStyle} alt="profile" src="https://image.shutterstock.com/shutterstock/photos/651401656/display_1500/stock-photo-cat-man-651401656.jpg" />
                    <Typography>
                       { username}
                    </Typography>



                    
                    <Typography>
                        Insert Description here
                    </Typography>
                    <Divider/>
                    <Typography>
                    <Link href="#"> Daily Dairies</Link> 
                    </Typography>
                    <Divider/>
                    <Typography>
                      <Link href="#" > Your Shelves</Link> 
                    </Typography>
                    <Divider/>
                    <Typography>
                    <Link href="/users/account{id}"> Followers </Link> 
                    </Typography>
                    <Divider/>
                    <Typography>
                    <Link href="#"> Account </Link> 
                    </Typography>
                </Paper>
            </Grid>
            {/* <Grid item xs={6}>
                <Paper style={paperStyle2}>
                    filler?
                </Paper>
            </Grid> */}
       </Grid>
    );
}

export default Profile;