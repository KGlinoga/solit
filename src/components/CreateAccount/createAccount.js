import React, {useState, useEffect} from "react";
import { Grid, Paper, Typography, Avatar, TextField, FormControlLabel, Checkbox, Button, Link } from "@mui/material";
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router";
   
//add redirect to profile once created

const CreateAccount = (props) => {
    const paperStyle = {padding: 15, height:'70vh', width: 450, margin: '40px auto'}
    const btnStyle={margin:'8px 0'}

    // for stay signed in checkbox
    const [checked, setChecked] = React.useState(true);
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");
    const[username, setUsername]=useState("");
    
 
    const submit=e=>{
        e.preventDefault();
        props.handleSignUp(email, password, firstName, lastName, username);
    }

    const navigate = useNavigate();

    useEffect(()=>{
        if(props.userId){
            navigate(`/users/${props.userId}`)
        }
    }, [props.userId])


    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return(
        <Grid container justifyContent="center" sx={{padding: '3px'}}>
            <Grid item >
                <Paper variant="outlined"  style={paperStyle}>
                    {/* Avatar and Sign in */}
                    <Grid item align='center'>
                        <Avatar sx={{bgcolor: "#C86F53", width:40, height:40}}>
                        <LocalFireDepartmentTwoToneIcon/>
                        </Avatar>
                        <Typography style={{fontSize: "40px", fontWeight:"bold"}}>
                            Create an account
                        </Typography>
                    </Grid>
                    {/* Sign in Text fields */}
                    <form onSubmit={submit}>
                    <Grid container>
                    <Grid item xs={12}>
                        <TextField id="firstNameCreate" label="First Name" placeholder="Enter First Name" variant ="standard" value={firstName} onChange={e=>setFirstName(e.target.value)} required fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="lastNameCreate" label="Last Name" placeholder="Enter Last Name" variant ="standard" value={lastName} onChange={e=>setLastName(e.target.value)} required fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="emailCreate" label="Email" placeholder="Enter Email" variant ="standard" value={email} onChange={e=>setEmail(e.target.value)} required fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="usernameCreate" label="username" placeholder="Enter username" variant ="standard" value={username} onChange={e=>setUsername(e.target.value)} required fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="passwordCreate" label="Password" placeholder="Enter Password" variant ="standard" type="password" value={password} onChange={e=>setPassword(e.target.value)} required fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="Confirm Password" placeholder="Re-enter Password" variant ="standard" type="password" required fullWidth/>
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
                    </form>
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