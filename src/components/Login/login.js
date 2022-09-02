import React from "react";
import { Grid, Paper, Typography, Avatar, TextField, FormControlLabel, Checkbox, Button, Link } from "@mui/material";
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import { pink } from "@mui/material/colors";


   


const Login = () => {
    const paperStyle = {padding: 15, height:'70vh', width: 400, margin: '40px auto'}
    const btnStyle={margin:'8px 0'}

    // for Remember Me checkbox
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return(
        <Grid container spacing={3} justifyContent="center" sx={{padding: '3px'}}>
            <Grid item xs={4}>
                <Paper variant="outlined" elevation={10} style={paperStyle}>
                    {/* Avatar and Sign in */}
                    <Grid item align='center'>
                        <Avatar sx={{bgcolor: "#C86F53", width:40, height:40}}>
                        <LocalFireDepartmentTwoToneIcon/>
                        </Avatar>
                        <Typography>
                            <h2>Sign In</h2>
                        </Typography>
                    </Grid>
                    {/* Sign in Text fields */}
                    <Grid item align="center">
                        <TextField id="filled-basic" label="E-mail" placeholder="Enter E-mail" variant ="filled" fullWidth required/>
                        <TextField id="filled-basic" label="Password" placeholder="Enter Password" variant ="filled" type="password" fullWidth required/>

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
                        label="Remember Me"
                    />
                    </Grid>
                    {/* submit form */}
                    <Grid item align="center" sx={{marginTop: "25px"}}>
                        <Button id="SignInBtn" variant="contained"type="submit" color='primary' fullWidth sx={{btnStyle}}>
                            Sign In
                        </Button>
                    </Grid>
                    <Grid item sx={{marginTop:"10px"}}>
                        <Typography>
                            <Link href="#">
                                Forgot Password?                        
                            </Link>
                        </Typography>
                        <Typography>
                            New to SoLit?    
                            <Link href="/createAccount">
                                Make an account
                            </Link>
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Login;