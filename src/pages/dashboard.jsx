import React, { useEffect } from 'react'
import {
  Box
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getBookAction } from '../redux/action';
const Dashboard = () => {
  const {bookData,isError,isLoading} = useSelector((state) => state);
  console.log(bookData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookAction());
  },[])
  return (
    <Box>

    </Box>
  )
}

export default Dashboard