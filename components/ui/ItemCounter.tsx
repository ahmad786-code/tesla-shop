import React, {FC, useState} from 'react'
import {IconButton, Box, Typography} from '@mui/material'
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'

interface Props {

}

const ItemCounter:FC<Props> = () => {
  return (
    <Box display='flex' alignItems='center'>
        <IconButton>
            <RemoveCircleOutline/>
        </IconButton>
        <Typography sx={{ width:40, textAlign: 'center'}}>1</Typography>
        <IconButton>
            <AddCircleOutline/>
        </IconButton>
    </Box>
  )
}

export default ItemCounter