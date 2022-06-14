import React from 'react'
import { Grid, Box, Typography, Button, Chip } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { initialData } from '../../database/products'
import ProductSlideShow from '../../components/products/ProductSlideShow'
import ItemCounter from '../../components/ui/ItemCounter'
import SizeSelector from '../../components/products/SizeSelector'

const product = initialData.products[0]

const ProductPage = () => {
  return (
   <ShopLayout title={product.title} pageDescription={product.description} imageFullUrl='undif' >
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
       <ProductSlideShow images={product.images}/>
      </Grid>
      <Grid item xs={12} sm={5}>
        <Box display='flex' flexDirection='column'>
          {/* Title */}
          <Typography variant='h1' component="h1">{product.title}</Typography>
          <Typography variant='subtitle1' component="h2">{product.price}</Typography>
        
        {/* Amount */}
        <Box sx={{my: 2}}>
        <Typography variant='subtitle2'>Amount</Typography>
           <ItemCounter/>
           <SizeSelector 
          //  selectedSize={product.sizes[3]} 
           sizes={product.sizes} />
        </Box>
        {/* Add */}
        <Button color="secondary" className='circular-btn'>Add to cart</Button>

        {/* <Chip label="Lorem ipsum" color='error' variant='outlined'/> */}

        {/* Description */}
        <Box sx={{mt: 3}}>
        <Typography variant='subtitle2'>Description</Typography>
        <Typography variant='body2'>{product.description}</Typography>
        </Box>


        </Box>
      </Grid>
    </Grid>
   </ShopLayout>
  )
}

export default ProductPage