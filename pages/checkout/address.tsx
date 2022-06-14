import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, Box, Button } from '@mui/material'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const Address = () => {
  return (
    <ShopLayout title='Address' pageDescription={'undefined'} imageFullUrl={'null'} >
        <Typography variant='h1' component='h1'>Address</Typography>
        <Grid container spacing={2} sx={{mt:2}}>
            <Grid item xs={12} sm={6}>
                <TextField variant='filled' placeholder='Number' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField variant='filled' placeholder='Full Name' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField variant='filled' placeholder='Address' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField variant='filled' placeholder='Address Line 2' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField variant='filled' placeholder='Postal Code' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField variant='filled' placeholder='City' fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6}>
               <FormControl fullWidth>
                <Select
                variant='filled'
                label='City'
                value={1}
                >
                    <MenuItem value={1}>Costa Rica</MenuItem>                    
                    <MenuItem value={2}>San Jose</MenuItem>                    
                    <MenuItem value={3}>Philadolphia</MenuItem>                    
                    <MenuItem value={4}>Chicago</MenuItem>                    
                </Select>
               </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField variant='filled' placeholder='Telephone' fullWidth/>
            </Grid>
        </Grid>

        <Box sx={{mt:5}} display="flex" justifyContent="center"> 
            <Button color="secondary" className='circular-btn' size="large">
                Place Order
            </Button>
        </Box>
    </ShopLayout>
  )
}

export default Address