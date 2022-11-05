import axios from 'axios'
import { Box, Button, CircularProgress, Container, Divider, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlaceCard from './PlaceCard'
import { fetchPlaces } from '../services/fetchPlaces'
import bgImage from '../assets/images/landingmain.jpg'

const PlaceSelector = () => {
  const [selectedLocationId, setSelectedLocationId] = useState('')
  const [canContinue, setCanContinue] = useState(false)
  const [places, setPlaces] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (searchValue.length > 2) {
        const matchingPlaces = fetchPlaces()
        setPlaces(matchingPlaces)
    }
  }, [searchValue])

  useEffect(() => {
    setCanContinue(selectedLocationId.length > 0)
  }, [selectedLocationId])


  return (
    <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backdropFilter: 'blur(100px)' }}>
    <Box bgcolor={'grey.100'} padding={4} minWidth={400} width={'30%'} textAlign={'center'} borderRadius={5} minHeight={500} display={'flex'} flexDirection={'column'}>
        <Typography variant='h4' mb={5}>
            Choose Your Business
        </Typography>
        <Box mb={3}>
        <TextField fullWidth size='small' label='Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </Box>
        {!isLoading ? <Box mb={4}>
        <PlaceCard selectedLocation={selectedLocationId} handleLocationSelect={setSelectedLocationId} id={'123'}/>
        <PlaceCard selectedLocation={selectedLocationId} handleLocationSelect={setSelectedLocationId} id={'432'}/>
        <PlaceCard selectedLocation={selectedLocationId} handleLocationSelect={setSelectedLocationId} id={'532'}/>
        </Box> : <Box flex={1} display={'flex'} alignItems={'center'} justifyContent={'center'}><CircularProgress/></Box>}
        <Button variant='contained' disabled={!canContinue}>Start your video</Button>
    </Box>
    </Box>
  )
}

export default PlaceSelector