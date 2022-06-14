import React from 'react'
import {Box, Typography} from '@mui/material'
import { ShopLayout } from '../components/layouts'

const NotFound = () => {
  return (
    <ShopLayout title='Page Not found' pageDescription='Lorem' imageFullUrl="EEE" >
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{flexDirection: {xs: 'flex', sm: 'row' }}}>
            <Typography variant='h1' component='h1' fontSize={100} fontWeight={200}>404 |</Typography>
            <Typography marginLeft={2}>Page not found go back to home.</Typography>
        </Box>
    </ShopLayout>
  )
}

export default NotFound