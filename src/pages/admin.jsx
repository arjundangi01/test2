import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Select,
  Button
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addBookAction } from "../redux/action";

let initialObj = {
  name: "",
  category:""
}
const Admin = () => {
 
  const [bookObj, setBookObj] = useState(initialObj);
 const dispatch = useDispatch()
  const onChange = (event) => {
    const { name, value } = event.target;
    setBookObj({ ...bookObj, [name]: value });
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(bookObj);
    dispatch(addBookAction(bookObj))
  }

  return (
    <Box w="20%" m="auto">
      <FormControl w="100%">
        <FormLabel>Enter name</FormLabel>
        <Input type="text" name="name" onChange={onChange} />

        <FormLabel>Select Category</FormLabel>

        <Select placeholder="Select category" onChange={onChange} name="category" >
          <option value='tech' >Tech</option>
          <option value='sport' >Sport</option>
        </Select>
        <Button
          onClick={onSubmit}
          mt={4}
          colorScheme="teal"
         
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Admin;
