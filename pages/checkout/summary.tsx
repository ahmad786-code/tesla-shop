import React from 'react'
import NextLink from 'next/link'
import { Card, CardContent, Divider, Grid, Box, Typography, Button, Link } from '@mui/material'
import { CartList } from '../../components/cart'
import OrderSummry from '../../components/cart/OrderSummry'
import { ShopLayout } from '../../components/layouts'

const Summary = () => {
    return (
        <ShopLayout title='Order Summary' pageDescription='Your order summary' >
            <Typography variant='h1' component="h1">Order Summary</Typography>

            <Grid container>

                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='summry-card'>
                        <CardContent>
                            <Typography variant='h2'>Summary (3 Products)</Typography>
                            <Divider sx={{ mt: 1 }} />
                            <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Edit address</Typography>
                                <NextLink href='/checkout/address' passHref>
                                    <Link underline='always'>
                                        Edit
                                    </Link>
                                </NextLink>
                            </Box>
                                
                                <Typography >Edit address</Typography>
                                <Typography >Edit address</Typography>
                                <Typography >Edit address</Typography>
                                <Divider sx={{ mt: 1 }} />

                                <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    <Link underline='always'>
                                        Edit
                                    </Link>
                                </NextLink>
                            </Box>

                            <OrderSummry />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>
                                   Confirm Order
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        </ShopLayout>
    )
}

export default Summary