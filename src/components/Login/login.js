import React, {  useState } from "react";
import { Grid, Paper, Typography, Avatar, TextField, FormControlLabel, Checkbox, Button, Link} from "@mui/material";
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import { pink } from "@mui/material/colors";

   
const Login = (props) => {
    // Styling
    const paperStyle = {padding: 15, height:'70vh', width: 400, margin: '40px auto'}
    const btnStyle={margin:'8px 0'}

    //set email and password
    const[email, setEmail]=useState("")
     const[password, setPassword]=useState("")
    // for Remember Me checkbox
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const submit=(e)=>{
        e.preventDefault();
        props.handleLogin(email, password);
    }

    return(
      
        <Grid container spacing={3} justifyContent="center" sx={{padding: '3px'}}>
            <Grid item xs={4}>
                <Paper variant="outlined" style={paperStyle}>
                    {/* Avatar and Sign in */}
                    <Grid item align='center'>
                        <Avatar sx={{bgcolor: "#C86F53", width:40, height:40}}>
                        <LocalFireDepartmentTwoToneIcon/>
                        </Avatar>
                        <Typography style={{fontSize: "40px", fontWeight:"bold"}}>
                            Sign In
                        </Typography>
                    </Grid>
                    {/* Sign in Text fields */}
                  
                    <Grid item align="center">
                        <form onSubmit={submit}>
                        <TextField name="emailLogin" label="E-mail" placeholder="Enter E-mail" variant ="filled" fullWidth required value={email} onChange={e=>setEmail(e.target.value)}/>
                        <TextField name="passwordLogin" label="Password" placeholder="Enter Password" variant ="filled" type="password" fullWidth required value={password} onChange={e=>setPassword(e.target.value)}/>
                            
                    <Grid item>
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
                    <Grid item align="center" sx={{marginTop: "25px"}}>
                        <Button id="SignInBtn" variant="contained"type="submit" color='primary' fullWidth sx={{btnStyle}}>
                            Sign In
                        </Button>
                    </Grid>
                    </form>

                    </Grid>
                    
                   
                    <Grid item sx={{marginTop:"10px"}}>
                        <Typography>
                            <Link href="#">
                                Forgot Password?                        
                            </Link>
                        </Typography>
                        <Typography>
                            New to SoLit? &nbsp;    
                            <Link href="/createAccount" key="signup">
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