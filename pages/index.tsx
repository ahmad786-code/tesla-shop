import {  Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts'
import { ProductList } from '../components/products'
import { initialData } from '../database/products'

const Home: NextPage = () => {
  return (
   <ShopLayout title='TESLA SHOP - Home' pageDescription='This' imageFullUrl='htt'>
     <Typography variant='h1' component='h1'>STORE</Typography>
     <Typography variant='h2' sx={{mb: 1}}>Toddo Products</Typography>
      <ProductList products={initialData.products as any}/>
   </ShopLayout>
  )
}

export default Home
