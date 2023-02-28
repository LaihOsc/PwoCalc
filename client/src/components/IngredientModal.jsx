import React from 'react'
import { Flex, Image, Link, useDisclosure } from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  ListItem,
  UnorderedList,
  List
} from '@chakra-ui/react'

  import { InfoOutlineIcon } from '@chakra-ui/icons'

export default function IngredientModal({data}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  if (data.description) {

  return (

      
        <>
          <Button bg='transparent' onClick={onOpen}><InfoOutlineIcon/></Button>
    
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{data.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <Text fontWeight={'bold'}>About:</Text>
        <Text>{data.description}</Text>


        {data.benefits.length > 0 ?
        <>
        <Text fontWeight={'bold'}>Benefits:</Text>
        <UnorderedList>
        {data.benefits.map((benefit) => {return(<ListItem>{benefit}</ListItem>)})}
        </UnorderedList>
        </>
        : null}
        
        {data.sideEffects.length > 0 ?
        <>
        <Text fontWeight={'bold'}>Possible side effects:</Text>
        <UnorderedList>
        {data.sideEffects.map((sideEffect) => {return(<ListItem>{sideEffect}</ListItem>)})}
        </UnorderedList>
        </>
        : null}
        
        
        
        <Text fontWeight={'bold'}>Dosage:</Text>
        {data.dosage}
        {data.bonus 
        ? 
        <>
        <Text fontWeight={'bold'}>Bonus</Text>
        <Text>{data.bonus}</Text>
        </>
        :  null }
        <Text fontSize={'xl'} marginTop={'2rem'} textAlign={'center'} fontWeight={'bold'}>Read more:</Text>
        <Flex justifyContent={'space-evenly'}>
          <Link target={"_blank"} href={data.url.examine}>
            <Image borderRadius={'3xl'} w={100} src='data:image/png;base64,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' alt='Examine.com logo' />
          </Link>

          <Link target={"_blank"} href={data.url.webmd}>
            <Image borderRadius={'3xl'} border={'2px'} w={100} src='https://play-lh.googleusercontent.com/Wg9aaBdA6X4IagSnb4b8en4XxYgiR0X5ZGCokNwRbhky8sd_ZQdjorvQBk9Sb63pDUQ' />
          </Link>

          <Link target={"_blank"} href={data.url.wikipedia}>
            <Image borderRadius={'3xl'} border={'2px'} p={'max'} w={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Wikipedia_logo_%28svg%29.svg/1250px-Wikipedia_logo_%28svg%29.svg.png' />
          </Link>


        </Flex>
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' m={'auto'} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )

}
}
