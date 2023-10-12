import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Product from './Product'

const Cart = () => {
    const {cartItems}=useSelector((store)=>{
        return {
          cartItems:store.cartReducer.cartItems
        }
      },shallowEqual)
  return (
    <div>
      <Heading textAlign={"center"}>Basket</Heading>
      <br />
      <Box w={"80%"} m={'auto'} display={"grid"} gridTemplateColumns={{xl:"repeat(4,1fr)",lg:"repeat(4,1fr)",md:"repeat(2,1fr)",sm:"repeat(1,1fr)",base:"repeat(1,1fr)"}}
      gap={"30px"}
      >
        {cartItems?.map((product) => (
          <Product key={product._id} product={product}/>
        ))}
        </Box>
    </div>
  )
}

export default Cart
