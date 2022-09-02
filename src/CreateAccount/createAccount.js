import React from "react";
import { Grid, Paper, Typography, Avatar, TextField, FormControlLabel, Checkbox, Button, Link } from "@mui/material";
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import { pink } from "@mui/material/colors";

   


const CreateAccount = () => {
    const paperStyle = {padding: 15, height:'70vh', width: 450, margin: '40px auto'}
    const btnStyle={margin:'8px 0'}

    // for stay signed in checkbox
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return(
        <Grid container justifyContent="center" sx={{padding: '3px'}}>
            <Grid item >
                <Paper variant="outlined" elevation={10} style={paperStyle}>
                    {/* Avatar and Sign in */}
                    <Grid item align='center'>
                        <Avatar sx={{bgcolor: "#C86F53", width:40, height:40}}>
                        <LocalFireDepartmentTwoToneIcon/>
                        </Avatar>
                        <Typography>
                            <h2>Create an account</h2>
                        </Typography>
                    </Grid>
                    {/* Sign in Text fields */}
                    <Grid container>
                    <Grid item xs={12}>
                        <TextField id="emailCreate" label="Email" placeholder="Enter Email" variant ="standard" required/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="usernameCreate" label="Username" placeholder="Enter Username" variant ="standard" required/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="passwordCreate" label="Password" placeholder="Enter Password" variant ="standard" type="password" required />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="standard-basic" label="Confirm Password" placeholder="Re-enter Password" variant ="standard" type="password" required/>
                    </Grid>

                    </Grid>

                    <Grid item>
                    {/* Remember Me */}
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                sx={{color: pink[800],
                                '&.Mui-checked':{
                                    color:pink[600],
                                },}}
                            />
                        }
                        label="Stay signed in"
                    />
                    </Grid>
                    {/* submit form */}
                    <Grid item align="center" sx={{marginTop: "25px"}}>
                        <Button id="createAccountBtn" variant="contained"type="submit" color='primary' fullWidth sx={{btnStyle}}>
                            Create Account
                        </Button>
                    </Grid>
                    <Grid item sx={{marginTop:"10px"}}>
                        <Typography>
                                Have an Account?                       
                            <Link href="/login">
                                Login
                            </Link>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default CreateAccount;