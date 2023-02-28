import { Flex } from '@chakra-ui/react'
import React from 'react'
import ComparisonPart from './ComparisonPart'

export default function Comparison({currency, conversionRates}) {
  return (
    <Flex flexDir={'row'}>
        <ComparisonPart currency={currency} conversionRates={conversionRates} />
        <ComparisonPart currency={currency} conversionRates={conversionRates} />
    </Flex>
  )
}
