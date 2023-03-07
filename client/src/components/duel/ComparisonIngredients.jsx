import React from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorMode,
} from '@chakra-ui/react'

import IngredientModal from '../general/IngredientModal'
import ingredientData from '../../data/ingredientData2'


export default function ComparisonIngredients({ingredients, currency, conversionRate, approximate}) {
  const { colorMode } = useColorMode()

  const calculateCost = (id, amount) => {
    const pricePerKg = ingredientData[id].euroPerKg
    const amountInKg = amount / 1000000
    return((Math.round((amountInKg * pricePerKg) * 1000))/1000)

  }

  return (
    <TableContainer>
  <Table variant='striped'>
    <Thead>
      <Tr>
        <Th>Ingredient</Th>
        <Th>Amount (<span style={{textTransform: 'lowercase'}}>mg)</span></Th>
        <Th isNumeric>{`Price (${currency})`}</Th>
      </Tr>
    </Thead>
    <Tbody>
    {ingredients.map((ingredient, index) => {
        const ingredientObject = ingredientData[ingredient[0]]
        return(
          <Tr key={index}>
    


        <Td>{ingredientObject.name}<IngredientModal data={ingredientObject} /></Td>
        <Td textAlign={'start'} isNumeric>{ingredient[1]} </Td>
         <Td isNumeric>{approximate(calculateCost(ingredient[0], ingredient[1]) * conversionRate)}</Td>
        
      </Tr>
        )
      })}
      
     
    </Tbody>
  </Table>
</TableContainer>
  )
}
