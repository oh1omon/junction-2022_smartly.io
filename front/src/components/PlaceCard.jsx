import { Box, Checkbox, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const PlaceCard = ({selectedLocation, id, title, content, handleLocationSelect}) => {
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        setIsSelected(selectedLocation === id)
    }, [selectedLocation, id])

    const selectLocation = (id) => {
        if (id === selectedLocation) {
            handleLocationSelect('')
            return
        } 
        handleLocationSelect(id)
    }

  return (
    <Box bgcolor={'grey.50'} flex={1} display={'flex'} justifyContent={'space-between'} alignItems={'center'} paddingY={2} paddingX={4} borderRadius={2} boxShadow={1} mb={2} > 
        <Box textAlign={'left'}>
        <Typography variant="body2" color="text.secondary">
            Street Address
        </Typography>
        <Typography variant="body1" fontWeight={'bold'}>
            Street Address
        </Typography>
        </Box>
        <Checkbox onClick={() => selectLocation(id)} checked={isSelected}/>
    </Box>
  )
}

export default PlaceCard