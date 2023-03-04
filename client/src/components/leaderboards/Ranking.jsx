import { Box, Center, Tooltip } from '@chakra-ui/react'
import React from 'react'
import ingredientData from '../../data/ingredientData'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Image,
    CircularProgress,
    CircularProgressLabel,
    Flex
  } from '@chakra-ui/react'
import InfoModal from './InfoModal'

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


      const approximate = (price => Math.round(price * 100) / 100)

      const productArray = productKeys.map((product, index) => {
        const productObject = products[product]
        const servingIngredientCost = productObject.ingredients.map((ingredient) => {
            return(calculateCost(ingredient[0], ingredient[1]))
        })

        const totalIngredientCost = calculateTotalCost(servingIngredientCost) * productObject.servings
        
        const priceInEur = productObject.price.amount / conversionRates[productObject.price.currency]


        productObject['ingredientCost'] = totalIngredientCost
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
        <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Ranking</Th>
        <Th>Product</Th>
        <Th>Ingredient breakdown</Th>
        <Th w={'min-content'} isNumeric><InfoModal /></Th>
      </Tr>
    </Thead>
    <Tbody>
      
      {sortedProducts.map((product, index) => {
        const rating = product.rating * 100
        const totalIngredientCost = product.ingredientCost
        const ingredients = product.ingredients

        const ingredientObjects = ingredients.map((ingredient) => {
          let ingredientObject = {
            id: ingredient[0],
            name: ingredientData[ingredient[0]].name,
            amount: ingredient[1],
            cost: (calculateCost(ingredient[0], ingredient[1])) * conversionRates[currency]
          }
          console.log(ingredientObject)
          return(ingredientObject)

        })

        let sortedProductIngredients = [...ingredientObjects]
    sortedProductIngredients.sort((a, b) => {
        if (a.cost < b.cost) {
            return 1
        }
        if (a.cost > b.cost) {
            return -1
        }
        return 0
    })
        return(
            <Tr>
                <Td>{index + 1 }</Td>
                <Td><Image w={20} src={product.img} />{product.name}</Td>
                <Td>
                  <Flex w={'full'} backgroundColor={'gold'}>
                    {sortedProductIngredients.map((ingredient, index) => {
                      return(
                        <Tooltip label={`${ingredient.name} ${ingredient.cost} ${currency}`}>
                        <Box h={10} backgroundColor={`blue.${index + 1}00`} w={calculateCost(ingredient.id, ingredient.amount) / (totalIngredientCost / product.servings)}><span>&shy;</span>{`${ingredient.id[0]}${ingredient.id[1]}${ingredient.id[2]}`}</Box>
                        </Tooltip>
                      )
                    })}
                  </Flex>
                </Td>
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
