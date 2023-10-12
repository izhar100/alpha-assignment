import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Product from './Product';
import { store } from '../redux/store';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  const navigate=useNavigate()

  useEffect(() => {
    fetch('https://alphabackend-lsvs.onrender.com/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cookie': 'connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8'
      },
      body: JSON.stringify({
        limit: 100,
        page: 0,
        search: ''
      })
    })
      .then((response) => response.json())
      .then((data) =>{ 
        setProducts(data.products)
    })
      .catch((error) => console.error('Error:', error));
  }, []);

  useEffect(()=>{
    console.log(products)
  },[])

  return (
    <div>
      <Heading textAlign={"center"}>Product List</Heading>
      <br />
      <Box w={"80%"} m={'auto'} display={"grid"} gridTemplateColumns={{xl:"repeat(4,1fr)",lg:"repeat(4,1fr)",md:"repeat(2,1fr)",sm:"repeat(1,1fr)",base:"repeat(1,1fr)"}}
      gap={"30px"}
      >
        {products?.map((product) => (
          <Product key={product._id} product={product}/>
        ))}
        </Box>
    </div>
  );
}

export default ProductList;
