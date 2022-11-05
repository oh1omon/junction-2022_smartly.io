import axios from 'axios'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PlaceCard from './PlaceCard'
import { fetchPlaces } from '../services/fetchPlaces'

const PlaceSelector = () => {
  const [selectedLocationId, setSelectedLocationId] = useState('')
  const [canContinue, setCanContinue] = useState(false)
  const [places, setPlaces] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const reviewsRequestConfig = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=Taco Bell&key=AIzaSyAIIEzqdvu1NIQrGk-Ot-N0wHW1oAksOUg`,
    headers: {},
};

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
    <Box bgcolor={'grey.100'} padding={4} minWidth={250} width={'30%'} textAlign={'center'} borderRadius={5}>
        <Typography variant='h4' mb={5}>
            Choose Your Business
        </Typography>
        <Box mb={3}>
        <TextField fullWidth size='small' label='Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </Box>
        <Box mb={4}>
        <PlaceCard selectedLocation={selectedLocationId} handleLocationSelect={setSelectedLocationId} id={'123'}/>
        <PlaceCard selectedLocation={selectedLocationId} handleLocationSelect={setSelectedLocationId} id={'432'}/>
        <PlaceCard selectedLocation={selectedLocationId} handleLocationSelect={setSelectedLocationId} id={'532'}/>
        </Box>
        <Button variant='contained' disabled={!canContinue}>Start your video</Button>
    </Box>
  )
}

export default PlaceSelector