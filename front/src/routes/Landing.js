import React from 'react'
import "./landing.scss"
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate()
  return (
    <section className='landing_main_divide'>
      <div className="landing_left_side">
        <Typography variant='h2' fontWeight={'bold'} className="landing_logo">Co.Mixer</Typography>
        <img className="landing_image" src="/landingmain.jpg"/>
      </div>
        <Box width={"17%"} marginLeft={"3%"} height={"fit-content"} paddingBottom={"2rem"} >
        <Typography variant="body1" gutterBottom mb={2}>
        Co.Mixer is meant to reveal the true side of your business. Create a short professional, promotional video effortlessly with only one click. The AI is going to!
      </Typography>
        <Button variant="contained" onClick={() => navigate('/place')}>Get started</Button>
        </Box>
      
    </section>
  )
}
