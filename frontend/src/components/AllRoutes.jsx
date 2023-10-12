import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList'
import Cart from './Cart'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<ProductList />} />
                <Route path='/basket' element={<Cart />} />
            </Routes>
        </div>
    )
}

export default AllRoutes
