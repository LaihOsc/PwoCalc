import React from 'react'

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
  IconButton,
  useColorMode,
} from '@chakra-ui/react'

import { DeleteIcon } from '@chakra-ui/icons'
import IngredientModal from './IngredientModal'



export default function Ingredients({ingredients, removeIngredient, currency, conversionRate, approximate}) {
  const { colorMode } = useColorMode()
  return (
    <TableContainer>
  <Table variant='striped'>
    <TableCaption textAlign={'start'}>Servings</TableCaption>
    <Thead>
      <Tr>
        <Th>Ingredient</Th>
        <Th>Amount (<span style={{textTransform: 'lowercase'}}>mg)</span></Th>
        <Th isNumeric>{`Price (${currency})`}</Th>
      </Tr>
    </Thead>
    <Tbody>
      {ingredients.map((ingredient, index) => {
        return(
          <Tr key={index}>


        <Td>{ingredient.name}<IngredientModal data={ingredient.data} /></Td>
        <Td textAlign={'start'} isNumeric>{ingredient.amount} </Td>
        <Td isNumeric>{approximate(ingredient.cost * conversionRate)}</Td>
        <Td><IconButton colorScheme={'red'} color={colorMode === 'light' ? 'black' : 'white'} bg='transparent' onClick={() => removeIngredient(index)} aria-label='Remove ingredient' icon={<DeleteIcon />} /></Td>

      </Tr>
        )
      })}
      
     
    </Tbody>
  </Table>
</TableContainer>
  )
}
