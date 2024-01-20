import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
    InputGroup,
  } from '@chakra-ui/react';
import { useState } from 'react';
import ImageToolTip from '../general/ImageToolTip';
import ingredientData2 from '../../data/ingredientData2';

  const ingredientNames = Object.keys(ingredientData2)
  
  export default function Form({conversionRates}) {

    const [ingredients, setIngredients] = useState([])

    const handleClick = (e) => {
      setIngredients([...ingredients, ''])
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Add a Pre-workout</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Thank you in advance :)
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
              
            <Stack spacing={4}>
            <form name='myform' type='hidden' method='POST' data-netlify='true'>
              <FormControl id="productName">
                <FormLabel>Product name</FormLabel>
                <InputGroup alignItems={'center'}>
                <Input name='productName' type="name" />
                </InputGroup>
                
              </FormControl>
              
              <FormControl id="url">
                <FormLabel>Product Url</FormLabel>
                <InputGroup>
                <Input name='url' type="name" />
                <ImageToolTip src={'/url.png'} />
                </InputGroup>
                
              </FormControl>
              <FormControl id="imageUrl">
                <FormLabel>Image Url</FormLabel>
                <InputGroup>
                <Input name='imageUrl' type="name" />
                <ImageToolTip src={'/imageurl.png'} />
                </InputGroup>
              </FormControl>


              <FormControl id="price">
                <FormLabel>Price</FormLabel>
                <InputGroup>
                <Input name='price' type="number" />
                <Select placeholder={'EUR'}>
                    {Object.keys(conversionRates).map((curr) => {
                return(<option key={curr} value={curr}>{curr}</option>)
                })}
                </Select>
                </InputGroup>
              </FormControl>


              <FormControl id="servings">
                <FormLabel>Servings</FormLabel>
                <Input name='servings' type="number" />
              </FormControl>

              <Button colorScheme={'green'} onClick={handleClick}>Add</Button>

              {ingredients.map((ingredientName) => {
                return(
                <FormControl id="servings">
                <FormLabel>{ingredientName}</FormLabel>
                <InputGroup>
                <Select>
                  {ingredientNames.map(ingredientName => <option value={ingredientName}>{ingredientData2[ingredientName].name}</option>)}
                </Select>
                <Input type="number" />
                
                </InputGroup>
              </FormControl>)
              })}

              <Stack my={5} spacing={10}>
               
                <Button
                  type='submit'
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Submit
                </Button>
              </Stack>
              </form>

              <form name="contact" method='post' netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
              
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }