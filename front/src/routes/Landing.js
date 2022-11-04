import React from 'react'
import "./landing.scss"
import { Button, Typography, Box } from "@mui/material";

export default function Landing() {
  return (
    <section className='landing_main_divide'>
      <div className="landing_left_side">
        <h1 className="landing_logo">Co.Mixer</h1>
        <img className="landing_image" src="/landingmain.jpg"/>
      </div>
        <Box width={"17%"} marginLeft={"3%"} height={"fit-content"} paddingBottom={"2rem"}>
        <Typography variant="body1" gutterBottom>
        Co.Mixer is meant to reveal the true side of your business. Create a short professional, promotional video effortlessly with only one click. The AI is going to 
      </Typography>
        <Button variant="contained">Get started</Button>
        </Box>
      
    </section>
  )
}
