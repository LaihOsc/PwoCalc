import { Center } from '@chakra-ui/react'
import React from 'react'
import Form from './Form'
import FormExample from './FormExample'

export default function FormPage({conversionRates}) {
  return (
    <Center>
        <Form conversionRates={conversionRates} />
        <FormExample conversionRates={conversionRates} />
    </Center>
  )
}
