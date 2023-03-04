import React, { useState, useEffect, useRef } from 'react'
import { Box, Button, Flex, Input, Select, Stat, StatLabel, StatNumber, StatGroup, Text, Heading } from '@chakra-ui/react'
import ingredientData from '../../data/ingredientData'
import Ingredients from '../general/Ingredients'
import ServingSlider from '../general/ServingSlider'


export default function Preworkout({conversionRates, currency}) {

  const [ingredients, setIngredients] = useState([])
  const [inputText, setInputText] = useState('')
  const [amount, setAmount] = useState(0)
  const [servingCost, setServingCost]= useState(0)
  const [servings, setServings] = useState(0)

  useEffect(() => {
    setServingCost(calculateTotalCost(ingredients.map((ingredient) => ingredient.cost)))
  }, [ingredients])

  const ingredientSelect = useRef()
  const amountInput = useRef()

  //Event handlers

  const handleClick = () => {
    setIngredients([...ingredients, {
        'key': ingredients.lastIndexOf + 1,
        'id': inputText,
        'name': ingredientData[inputText].name, 
        'amount': amount, 
        'cost': calculateCost(inputText, amount),
        'data': ingredientData[inputText]
    }])
    ingredientSelect.current.value = ""
    amountInput.current.value = ""
  }

  const handleServingsChange = (e) => setServings(e)


  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
        setIngredients([...ingredients, {
            'key': ingredients.lastIndexOf + 1,
            'id': inputText,
            'name': ingredientData[inputText].name, 
            'amount': amount, 
            'cost': calculateCost(inputText, amount),
            'data': ingredientData[inputText]
        }])
        ingredientSelect.current.value = ""
        amountInput.current.value = ""
    }
  }

  const handleSelectChange = (e) => {
    setInputText(e.target.value)
    amountInput.current.focus()
  }

  const handleInputChange = (e) => {
    setAmount(e.target.value)
  }

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index)
    setIngredients(newIngredients)
  }

  const ingredientKeys = Object.keys(ingredientData)

  const approximate = (price => Math.round(price * 100) / 100)  

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
  return (
        <>
        <Box minW={700} w={700} p={5} borderWidth="1px">
        <Flex p={4} justifyContent={'space-between'}>
        <Heading textAlign={'center'}>Pre-Workout Calculator</Heading>
        
        </Flex>
        <Flex flexDir={'column'}>
        
        

        <Flex>
      
        <Select ref={ingredientSelect} onChange={handleSelectChange} placeholder='Select Ingredient'>

          {ingredientKeys.map((key) => {
            return(<option key={key} value={key}>{ingredientData[key].name}</option>)
          })}

        </Select>

        <Input onKeyDown={handleKeyDown} ref={amountInput} onChange={handleInputChange} type={'number'} placeholder={'Amount in mg (1g = 1000mg)'}></Input>

        <Button colorScheme={'green'} onClick={handleClick}>Add</Button>
        </Flex>
        
        <Ingredients ingredients={ingredients} removeIngredient={removeIngredient} currency={currency} conversionRate={conversionRates[currency]} approximate={approximate} />

        <Text>Servings:</Text>
        <ServingSlider servings={servings} handleServingsChange={handleServingsChange} />

    
        
    <StatGroup>
        
        

        <Stat>
            <StatLabel>Price per serving:</StatLabel>
            <StatNumber>{approximate(servingCost * conversionRates[currency])} {currency}</StatNumber>
        </Stat>
        
        <Stat>
            <StatLabel>Total Price:</StatLabel>
            <StatNumber>{approximate(servingCost * servings * conversionRates[currency])} {currency}</StatNumber> 
        </Stat>
    
    </StatGroup>

        </Flex>

        </Box>

        
        </>
  )
}
