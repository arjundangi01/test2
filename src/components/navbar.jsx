import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Spacer } from "@chakra-ui/react"
const Navbar = () => {
  return (
      <Flex px='40px'  bg='red.100' py='2' >
          <Link to='/' >Home</Link>
          <Spacer />
          <Link to='/dashboard' >DashBoard</Link>
          <Spacer />
          <Link to='admin' >Admin</Link>
    </Flex>
  )
}

export default Navbar