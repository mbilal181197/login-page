import { Box, Typography, TextField, FormGroup, Checkbox, FormControlLabel, Link, Button } from "@mui/material";
import React from "react";
import "../../src/Style/LoginPage.scss";

const LoginPage = () => {
    return (
        <Box className="Login">
            <Box sx={{display:"flex", justifyContent:"center", flexDirection:'column', alignItems:"center"}}>
                <Typography variant="h1" className="text_primary font_poppins">
                    Login
                </Typography>
                <Typography variant="body2" className="text_secondary font_poppins" sx={{mt:4}}>
                    Sign in and start managing your candidates!
                </Typography>
            </Box>
            <Box sx={{ display: "flex", my:10 }} className="input" >
                <TextField id="outlined-basic" className="font_poppins text_input" label="Email" variant="outlined" sx={{mb:3}} />
                <TextField id="outlined-basic" className="font_poppins text_input" label="Password" variant="outlined" />
            </Box>
            <Box className="checkbox" sx={{mb:2}}>
                <FormGroup>
                    <FormControlLabel className="font_poppins text_remember" control={<Checkbox defaultChecked />} label="Remember Me" />
                </FormGroup>
                <Link href="#" className="font_poppins text_forget">
                    Forget Password?
                </Link>
            </Box>
            <Box>
                <Button variant="contained" className="font_poppins btn_login">
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default LoginPage;
