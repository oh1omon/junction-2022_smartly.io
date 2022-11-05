import axios from 'axios'
import { Box, Button, CircularProgress, Container, Divider, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlaceCard from './PlaceCard'
import { fetchPlaces } from '../services/fetchPlaces'
import bgImage from '../assets/images/landingmain.jpg'
import { useContext } from "react";
import { VidContext } from "../VidState";
import { useNavigate } from "react-router-dom";

const PlaceSelector = () => {
  const [canContinue, setCanContinue] = useState(false)
  const [places, setPlaces] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (searchValue.length > 2) {
        fetchPlaces(searchValue, setPlaces)
    }
  }, [searchValue])

  const vidState = useContext(VidContext);
  useEffect(() => {
    setCanContinue(vidState.selectedLocationId.length > 0)
  }, [vidState.selectedLocationId])
  const navigate = useNavigate();

  return (
    <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backdropFilter: 'blur(100px)' }}>
    <Box bgcolor={'grey.100'} padding={4} minWidth={400} width={'30%'} textAlign={'center'} borderRadius={5}  display={'flex'} flexDirection={'column'}>
        <Typography variant='h4' mb={5}>
            Choose Your Business
        </Typography>
        <Box mb={3}>
        <TextField fullWidth size='small' label='Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </Box>
        {!isLoading ? <Box style={{maxHeight:"50vh", overflow:"scroll" }}  mb={2}>
          {places.map((place) => (
            <PlaceCard key={place.place_id} place={place} selectedLocation={vidState.selectedLocationId} handleLocationSelect={vidState.setSelectedLocationId} />
          ))}
        
        </Box> : <Box flex={1} display={'flex'} alignItems={'center'} justifyContent={'center'}><CircularProgress/></Box>}
        <Button onClick = {(e)=>{
          //When done, move to the next page
          axios({ url: `http://localhost:5000/api/config/${vidState.selectedLocationId}`, method: "POST", data: {} })
              .then((res) => {
                const wholeConfig = res.data;
                vidState.setVidLength(wholeConfig.vidLength);
                vidState.setCompanyName(wholeConfig.companyName);
                vidState.setVidStyle(wholeConfig.vidStyle);
                vidState.setReviewsContents(wholeConfig.reviews);
                console.log(vidState.reviewsContents)
                e.preventDefault()
                navigate("/config");
              })
              .catch((error) => {
                console.log(error);
              });
        }}variant='contained' disabled={!canContinue}>Start your video</Button>
    </Box>
    </Box>
  )
}

export default PlaceSelector