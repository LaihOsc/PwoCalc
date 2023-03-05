import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Tooltip } from '@chakra-ui/react'
import React from 'react'

export default function InfoModal({title, content}) {
  return (
    
    <Tooltip label={content}>
        <Box>
        {title}
        <InfoOutlineIcon boxSize={3}/>
        </Box>
        
    </Tooltip>
    
  )
}
