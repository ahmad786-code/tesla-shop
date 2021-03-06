
import { Box, Button } from '@mui/material'
import React, { FC } from 'react'
import { ISize } from '../../interface'

interface Props {
    selectedSize?:  ISize,
    sizes: ISize[]
}

const SizeSelector:FC<Props> = ({selectedSize, sizes}) => {
  return (
    <Box>
        {
            sizes.map((size) => (
                <Button key={size} size="small" color={ selectedSize === size ? 'primary' : 'info'  }>
                    {size}
                </Button>
            ))
        }
    </Box>
  )
}

export default SizeSelector