import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

import {
    MdOutlineLeaderboard
} from 'react-icons/md'

import {
    GiDuel
} from 'react-icons/gi'

import{
    TbMathSymbols
} from 'react-icons/tb'

const choose = (prop) => {
    if (prop === 'leaderboards') {
    return({
        title: 'Leaderboards',
        description: 'All pre-workouts ranked in order by rating.',
        icon: <MdOutlineLeaderboard size={'fill'} />
    })
    } else if(prop === 'duel') {
        return({
            title: 'Duel',
            description: 'Compare pre-workout prices and ingredients 1-on-1.',
            icon: <GiDuel size={'fill'}/>
        })
    } else if(prop === 'calculator') {
        return({
            title: 'Calculator',
            description: 'Calculate the cost of creating your own pre-workout.',
            icon: <TbMathSymbols size={'fill'}/>
        })
    }
}



export default function LandingPageCard({prop, handleTabChange}) {

    const data = choose(prop)
  return (
    <Center onClick={handleTabChange} px={4} py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
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

        
        </Stack>
      </Box>
    </Center>
  );
}