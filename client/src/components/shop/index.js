/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductByPaginate } from 'store/actions/products.action'
import { getAllBrands } from 'store/actions/brands.actions'

// eslint-disable-next-line no-unused-vars
import GridOff from '@material-ui/icons/GridOff'
import { GridOn } from '@material-ui/icons'

const Shop = () => {
    const defaultValues = {
        keywords: '',
        brand: [],
        min: 0,
        max: 5000,
        frets: [],
        page: 1,
    }
    const [grid, setGrid] = useState(false)
    const [searchValues, setSearchValues] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        defaultValues
    )
    const brands = useSelector((state) => state.brands)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllBrands())
    }, [dispatch])

    //look for search change
    useEffect(() => {
        dispatch(getProductByPaginate(searchValues))
    }, [searchValues, dispatch])
    return <>Shop</>
}

export default Shop
