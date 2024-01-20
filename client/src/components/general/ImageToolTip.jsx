import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Image, Img, Tooltip } from '@chakra-ui/react'
import React from 'react'

export default function ImageToolTip({src}) {
  return (
    <Tooltip label={<Image src={src} ></Image>}>
        <InfoOutlineIcon m={3} />
    </Tooltip>
  )
}
