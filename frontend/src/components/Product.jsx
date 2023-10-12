import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React,{useEffect,useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { ADD, REMOVE } from '../redux/cartReducer/actionType'
import { useLocation } from 'react-router-dom'

const Product = ({product}) => {
  const {cartItems}=useSelector((store)=>{
    return {
      cartItems:store.cartReducer.cartItems
    }
  },shallowEqual)
  const [cartItem,setCartItem]=useState([])
  const dispatch=useDispatch()
  const location=useLocation()
  useEffect(()=>{
   const item=cartItems?.filter((el)=>el._id==product._id)
   if(item.length>0){
    setCartItem(item)
   }
  },[cartItems])

  const handleAddtoBasket=(item)=>{
     if(cartItem?.length>0){
      if(item._id==cartItem[0]._id){
        alert("Product already in cart")
      }else{
        dispatch({type:ADD,payload:item})
        alert("Product added in cart")
      }
     }else{
      dispatch({type:ADD,payload:item})
      alert("Product added in cart")
     }
  }
  const handleRemove=(item)=>{
    dispatch({type:REMOVE,payload:item})
  }
  return (
    <div>
      <Box boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
      padding={"20px"} borderRadius={"10px"}
      >
        <Flex justifyContent={"center"} alignItems={"center"}
        ><Image src={product.image} width="100px" bgColor="#dbd2ff"/></Flex>
        <Box textAlign={"center"}>
          <Text textAlign={"center"} fontWeight={500} noOfLines={1}>{product.name}</Text>
          <Text textAlign={"center"}>{product.quantity} KG</Text> 
          <Text textAlign={"center"} fontWeight={500} color={"#3700ff"}>₹ {product.price} KG</Text> 
          {
            location.pathname=="/basket"
            ?
            <Button mt={"10px"} colorScheme='red' onClick={()=>handleRemove(product)}>REMOVE</Button>
            :
            <Button mt={"10px"} colorScheme='whatsapp' onClick={()=>handleAddtoBasket(product)}>ADD TO BASKET</Button>
          }
        </Box>
      </Box>
    </div>
  )
}

export default Product
