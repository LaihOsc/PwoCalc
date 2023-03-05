import React, { useState } from 'react'
import {Flex, Select, Stat, StatLabel, StatNumber, StatGroup, Center, Box } from '@chakra-ui/react'
import productData from '../../data/productData'

import ComparisonIngredients from './ComparisonIngredients'
import ingredientData from '../../data/ingredientData'
import ProductSimple from './ProductCard'
import ratingCalculator from '../general/ratingCalculator'

export default function ComparisonPart({currency, conversionRates}) {

  const [product, setProduct] = useState(productData['c4Original'])
  

  const totalPrice = product.price.amount / conversionRates[product.price.currency]
  const servingPrice = (totalPrice / product.servings)

  const conversionRate = conversionRates[currency]

  const productKeys = Object.keys(productData)


  const handleProductChange = (e) => {
      setProduct(productData[e.target.value])
  }

  const calculateCost = (id, amount) => {
    const pricePerKg = ingredientData[id].euroPerKg
    const amountInKg = amount / 1000000
    return((Math.round((amountInKg * pricePerKg) * 1000))/1000)

  }

  const calculateTotalCost = (costsArray) => {
    const initialValue = 0
    const sumWithInitial = costsArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue, initialValue
    );
    return(sumWithInitial)
  }

  const servingMaterialCosts = calculateTotalCost(
    product.ingredients.map(ingredient => calculateCost(ingredient[0], ingredient[1]) * conversionRate) )

    const approximate = (price => Math.round(price * 100) / 100)  
      

  return (
        <>
        <Box minW={700} w={700} p={5} borderWidth="1px">

        <Select placeholder='Choose product' onChange={handleProductChange} aria-label='select pre-workout'>
        {productKeys.map((key) => {
            return(<option key={key} value={key}>{productData[key].name}</option>)
          })}
        </Select>

        {product == {} ? 
        null 
        : 
        <>
        <Center>
          <Flex flexDir={'column'} alignItems={'center'}>
        <ProductSimple 
        product={product} 
        perServing={approximate(servingPrice * conversionRate)} 
        total={approximate(totalPrice * conversionRate)} 
        rating={approximate(((servingMaterialCosts / (servingPrice * conversionRate) + ratingCalculator(ingredientData, product.ingredients) ) / 2))*100}
        currency={currency}
        />
    
        </Flex>
        </Center>
        <Flex flexDir={'column'}>
        
        

    
        <ComparisonIngredients 
        ingredients={product.ingredients} 
        currency={currency} 
        conversionRate={conversionRates[currency]} 
        approximate={approximate}
        />

    
    <StatGroup>
        
        <Stat>
            <StatLabel>Cost per serving:</StatLabel>
            <StatNumber>{approximate(servingMaterialCosts)} {currency}</StatNumber>
        </Stat>
        
        <Stat>
            <StatLabel>Total Cost:</StatLabel>
            <StatNumber>{approximate(servingMaterialCosts * product.servings)} {currency}</StatNumber> 
        </Stat>
    
    </StatGroup>

        </Flex>
        </>
        }
        </Box>
        </>
  )
}
