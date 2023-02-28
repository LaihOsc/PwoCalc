import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import ingredientData from '../data/ingredientData'

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image,
    CircularProgress,
    CircularProgressLabel
  } from '@chakra-ui/react'
import InfoModal from './InfoModal'
import { InfoOutlineIcon } from '@chakra-ui/icons'

export default function Ranking({products, conversionRates, currency}) {

    const productKeys = Object.keys(products)

    const calculateTotalCost = (costsArray) => {
        const initialValue = 0
        const sumWithInitial = costsArray.reduce(
          (accumulator, currentValue) => accumulator + currentValue, initialValue
        );
        return(sumWithInitial)
      }

      const calculateCost = (id, amount) => {
        const pricePerKg = ingredientData[id].euroPerKg
        const amountInKg = amount / 1000000
        return((Math.round((amountInKg * pricePerKg) * 1000))/1000)
      }

      const servingIngredientCost = products['buckedUp'].ingredients.map((ingredient) => {
        return(calculateCost(ingredient[0], ingredient[1]))
      })

      const totalIngredientCost = calculateTotalCost(servingIngredientCost) * products['buckedUp'].servings
      console.log(totalIngredientCost)

      const priceInEur = products['buckedUp'].price.amount / conversionRates[products['buckedUp'].price.currency]

      const approximate = (price => Math.round(price * 100) / 100)

      const productArray = productKeys.map((product, index) => {
        const productObject = products[product]
        const servingIngredientCost = productObject.ingredients.map((ingredient) => {
            return(calculateCost(ingredient[0], ingredient[1]))
        })

        const totalIngredientCost = calculateTotalCost(servingIngredientCost) * productObject.servings
        
        const priceInEur = productObject.price.amount / conversionRates[productObject.price.currency]

        productObject['rating'] = (totalIngredientCost / priceInEur)
        return(productObject)
    })
    console.log(productArray)

    let sortedProducts = [...productArray]
    sortedProducts.sort((a, b) => {
        if (a.rating < b.rating) {
            return 1
        }
        if (a.rating > b.rating) {
            return -1
        }
        return 0
    })

    console.log(sortedProducts)
  return (
    <Center>
        <Box minW={1400} w={1400} p={5} borderWidth="1px">
          <Heading textAlign={'center'}>Ingredient cost / Product price</Heading>
        <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Ranking</Th>
        <Th>Product</Th>
        <Th w={'min-content'} isNumeric><InfoModal /></Th>
      </Tr>
    </Thead>
    <Tbody>
      
      {sortedProducts.map((product, index) => {
        const rating = product.rating * 100
        return(
            <Tr>
                <Td>{index + 1 }</Td>
                <Td><Image w={20} src={product.img} />{product.name}</Td>
                <Td isNumeric>
                <CircularProgress 
            size={100} 
            value={rating}
            color={
                rating >= 75
                ? 'green.400':
                 75 >= rating && rating >= 50
                ? 'orange.400':
                 50 >= rating && rating >= 40
                ? 'red.400': 'red.800'
            }
            >
                <CircularProgressLabel>{approximate(product.rating) * 100}%</CircularProgressLabel>
            </CircularProgress>
                    </Td>
            </Tr>
        )
      })}

    </Tbody>

  </Table>
</TableContainer>
        </Box>
    </Center>
  )
}
