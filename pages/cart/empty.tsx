import NextLink from 'next/link'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Typography, Link } from '@mui/material'
import { ShopLayout } from '../../components/layouts'

const EmptyCart = () => {
    return (
        <ShopLayout title='Empty Cart' pageDescription='Empty cart page' imageFullUrl='Undi' >
            <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{ flexDirection: { xs: 'flex', sm: 'row' } }}>

                <RemoveShoppingCartOutlined sx={{fontSize: 100}}/>

                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography>Your cart is empty</Typography>
                    <NextLink href='/' passHref>
                        <Link typography='h4' color="secondary">Go Home</Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyCart