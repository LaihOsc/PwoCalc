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
  
  export default function FormExample({conversionRates}) {

    const [ingredients, setIngredients] = useState([''])

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Example</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              (Not sponsored)
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl isReadOnly id="productName">
                <FormLabel>Product name</FormLabel>
                <InputGroup>
                <Input type="name" value={'Gorilla Mode'} />
                </InputGroup>
                
              </FormControl>
              
              <FormControl isReadOnly id="url">
                <FormLabel>Product Url</FormLabel>
                <Input type="name" value={'https://gorillamind.com/products/gorilla-mode'} />
              </FormControl>
              <FormControl isReadOnly id="imageUrl">
                <FormLabel>Image Url</FormLabel>
                <Input type="name" value={'https://cdn.shopify.com/s/files/1/0369/2580/0493/products/Gorilla-Mode-Krush-OG.png?v=1677478170&width=1200'} />
              </FormControl>
              <FormControl isReadOnly id="price">
                <FormLabel>Price</FormLabel>
                <InputGroup>
                <Input type="number" value={50} />
                <Select placeholder={'USD'}>
                </Select>
                </InputGroup>
              </FormControl>
              <FormControl id="servings">
                <FormLabel>Servings</FormLabel>
                <Input value={40} type="number" />
              </FormControl>
              <Stack spacing={10}>
               
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Yeet
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }