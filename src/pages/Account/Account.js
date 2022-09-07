import Api from '../../utils/Api';
import { Divider, Grid, Paper, Typography, Link, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Widget from "../../components/cloudinary/cloud";

const Account = (props) => {
    const { id } = useParams();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const[description, setDescription]=useState('');
    const [profilePicURL, setProfilePicURL] = useState('');

    const submit = (e) => {
        e.preventDefault();
        props.updateAccount(email, password);
    }

    useEffect(() => {
        Api.getUserById(id).then(res => res.json()).then(data => {
            setEmail(data.email);
            // setFollowers(data.);
            setUsername(data.username);
            // setDescription(data.)
        })
    }, [id])

    const imgStyle = { width: 50, height: 50, borderRadius: "80px" }
    const paperStyle = { padding: 10, margin: "20px 20px" }


    return (
        <Grid container align="center" justifyContent="space-between">
            <Grid item xs={12}>
                <Paper style={paperStyle}>
                    <img style={imgStyle} alt="profile" src="
https://image.shutterstock.com/shutterstock/photos/651401656/display_1500/stock-photo-cat-man-651401656.jpg
" />
                    <Typography>
                        {username}
                    </Typography>
                    {/* <Typography>
                        Insert Description here
                    </Typography> */}
                    <Divider />
                    <form onSubmit={submit}>

                        <TextField name="changeFirstName" label="First name" placeholder="Enter First name" variant="filled" fullWidth value={firstName} onChange={e => setFirstName(e.target.value)} />
                        
                        <TextField name="changeLastName" label="Last name" placeholder="Enter Last Name" variant="filled" fullWidth value={lastName} onChange={e => setLastName(e.target.value)} />

                        <TextField name="changeEmail" label="Email" placeholder="Enter Email" variant="filled" fullWidth value={email} onChange={e => setEmail(e.target.value)} />

                        <TextField name="changeUsername" label="First username" placeholder="Enter username" variant="filled" fullWidth value={username} onChange={e => setUsername(e.target.value)} />

                        <TextField name="changePassword" label="New Password" placeholder="Enter new Password" variant="filled" fullWidth value={password} onChange={e => setPassword(e.target.value)} />

                        {/* Cloudinary Widget placeholder */}
                        <Widget />

                        <Button id="updateBtn" variant="contained" type="submit" color='primary' fullWidth >
                            Update
                        </Button>
                    </form>
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

export default Account;