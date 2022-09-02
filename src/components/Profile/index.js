import { Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Profile = () => {
    const imgStyle = {width: 50, height:50, borderRadius: "80px"}
    const paperStyle={padding: 10, margin:"20px 20px" }
    const paperStyle2={padding: 20, margin:"20px 20px" }

    return(
       <Grid container align="center" justifyContent="space-between">
            <Grid item xs={6}>
                <Paper style={paperStyle}>
                    <img style={imgStyle} alt="profile" src="https://unsplash.com/photos/_M6gy9oHgII" />
                    <Typography>
                        Insert Username Here
                    </Typography>
                    <Typography>
                        Insert Description here
                    </Typography>
                    <Divider/>
                    <Typography>
                        Daily Diary
                    </Typography>
                    <Divider/>
                    <Typography>
                        Your Shelves
                    </Typography>
                    <Divider/>
                    <Typography>
                        Followers
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={paperStyle2}>
                    filler?
                </Paper>
            </Grid>
       </Grid>
    );
}

export default Profile;