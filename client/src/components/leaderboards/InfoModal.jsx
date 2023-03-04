import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Tooltip } from '@chakra-ui/react'
import React from 'react'

export default function InfoModal() {
  return (
    
    <Tooltip label={'Ingredient cost / Product price'}>
        <Box>
        RATING
        <InfoOutlineIcon boxSize={3}/>
        </Box>
        
    </Tooltip>
    
  )
}
