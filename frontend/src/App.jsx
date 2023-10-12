import { Button, Flex } from '@chakra-ui/react'
import AllRoutes from './components/AllRoutes'
import ProductList from './components/ProductList'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  return (
    <>
      <br />
      <Flex w={"80%"} m={"auto"} justifyContent={"space-between"}>
        <Button colorScheme='blue' onClick={()=>navigate("/")}>Home</Button>
        <Button colorScheme='red' onClick={() => navigate("/basket")}>Basket</Button>
      </Flex>
      <br />
      <AllRoutes />
    </>
  )
}

export default App
