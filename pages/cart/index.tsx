import { Card, CardContent, Divider, Grid, Box, Typography, Button } from '@mui/material'

import React from 'react'
import { CartList } from '../../components/cart'
import OrderSummry from '../../components/cart/OrderSummry'
import { ShopLayout } from '../../components/layouts'

const CartPage = () => {
    return (
        <ShopLayout title='Cart Page' pageDescription='This is cart page' imageFullUrl='null' >
            <Typography variant='h1' component='h1'>Cart</Typography>
            <Grid container>

                <Grid item xs={12} sm={7}>
                  <CartList editable />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summry-card'>
                        <CardContent>
                            <Typography variant='h2'>Order</Typography>
                            <Divider sx={{ mt: 1 }} />

                            {/* Order summry */}
                            <OrderSummry/>

                            <Box sx={{mt:3}}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                    Checkout
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default CartPage