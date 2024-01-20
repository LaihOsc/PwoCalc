import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Button,
  Link
} from '@chakra-ui/react';

import 
    {
      MdOutlineLeaderboard
    } from 'react-icons/md'

import {
    GiDuel
} from 'react-icons/gi'

import{
    TbMathSymbols
} from 'react-icons/tb'

import {
  AiOutlineArrowRight
} from 'react-icons/ai'

import { NavHashLink } from 'react-router-hash-link';

const choose = (prop) => {
    if (prop === 'leaderboards') {
    return({
        title: 'Leaderboards',
        description: 'All pre-workouts ranked in order by rating.',
        icon: <MdOutlineLeaderboard color='black' size={'fill'} />
    })
    } else if(prop === 'duel') {
        return({
            title: 'Duel',
            description: 'Compare pre-workout prices and ingredients 1-on-1.',
            icon: <GiDuel color='black' size={'fill'}/>
        })
    } else if(prop === 'calculator') {
        return({
            title: 'Calculator',
            description: 'Calculate the cost of creating your own pre-workout.',
            icon: <TbMathSymbols color='black' size={'fill'}/>
        })
    }
}



export default function LandingPageCard({prop, href, handleTabChange}) {

    const data = choose(prop)
  return (
    <Center id={prop} px={4} py={6}>
      <Box
        maxW={{base:'80%', sm: '445px'}}
        w={'100%'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        textAlign={'center'}>
        
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>

          {data.icon}
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {data.title}
          </Heading>
          <Text color={'gray.500'}>
            {data.description}
          </Text>

          <NavHashLink to={href}>
          <Button onClick={handleTabChange}
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'3xl'}
              p={10}
              fontSize={'xl'}
              _hover={{
                bg: 'green.500',

              }}
              value={prop}>
              <Text><AiOutlineArrowRight /></Text>
            </Button>
            </NavHashLink>
        
        </Stack>
      </Box>
    </Center>
  );
}