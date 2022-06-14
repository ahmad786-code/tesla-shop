import { FC, useState, useMemo } from "react"
import { Card, Link, CardActionArea, CardMedia, Grid, Box, Typography } from "@mui/material"
import NextLink from 'next/link'

import { IProduct } from "../../interface"

interface Props {
    product: IProduct
}

export const ProductCard:FC<Props> = ({product}) => {

    const [isHoverd, setisHoverd] = useState(false)

    const productImage = useMemo(() => {
        return isHoverd 
        ? `products/${product.images[1]}`
        : `products/${product.images[0]}`
    },[isHoverd, product.images])

    return (
        <Grid item xs={6} sm={4} onMouseEnter={() => setisHoverd(true)} onMouseLeave={() => setisHoverd(false)} >
              <Card>
                <NextLink href='/product/slug' passHref prefetch={false}>
                    <Link>
                    <CardActionArea>
                      <CardMedia component="img" className="fadeIn" image={productImage} alt={product.title}/>
                    </CardActionArea>
                    </Link>
                </NextLink>
            </Card>

         
        <Box sx={{mt: 1}} className="fadeIn">
            <Typography fontWeight={700}>{product.title}</Typography >
            <Typography fontWeight={500}>{`$${product.price}`}</Typography>
        </Box>
  </Grid>
    )
  }
  