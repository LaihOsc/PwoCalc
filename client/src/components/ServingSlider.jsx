import React from 'react'
import { Flex, Slider, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'

export default function ServingSlider({servings, handleServingsChange}) {
  return (
    <Flex>
      <NumberInput maxW='100px' mr='2rem' value={servings} onChange={handleServingsChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex='1'
        focusThumbOnChange={false}
        value={servings}
        onChange={handleServingsChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize='sm' boxSize='32px' children={servings} />
      </Slider>
    </Flex>
  )
}
