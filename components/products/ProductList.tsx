import { Grid } from "@mui/material"
import { FC } from "react"
import { ProductCard } from "./ProductCard"
import {IProduct, ISizes, ITypes} from '../../interface'

interface Props {
    products: IProduct[],
   
}


export const ProductList:FC<Props> = ({products}) => {
  return (
    <Grid container spacing={4}>
        {
            products.map((product) => (
                <ProductCard key={product.slug} product={product}/>
            ))
        }
    </Grid>
  )
}
