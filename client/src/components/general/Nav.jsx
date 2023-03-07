import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Select,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { NavHashLink } from 'react-router-hash-link';

import {
  GiAcid
} from 'react-icons/gi'





export default function Nav({handleCurrencyChange, conversionRates, currency, handleTabChange}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} h={'fit-content'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex flexDir={'row'}>
              <GiAcid size={50} />
                <Text fontSize={'3xl'} fontWeight={'extrabold'}>TOPWO</Text>
                <GiAcid size={50} />
              </Flex>
          
          


          <Flex w={500} flexDir={'row'} justifyContent={'space-between'}>
            <NavHashLink to='/'>
            <Button value={'landingPage'} onClick={handleTabChange}>Home</Button>
            </NavHashLink>

            <NavHashLink to='ranking'>
            <Button value={'leaderboards'} onClick={handleTabChange}>Leaderboards</Button>
            </NavHashLink>

            <NavHashLink to='duel'>
            <Button value={'duel'} onClick={handleTabChange}>Duel</Button>
            </NavHashLink>

            <NavHashLink to='calculator'>
            <Button value={'calculator'} onClick={handleTabChange}>Calculator</Button>
            </NavHashLink>
            </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Select onChange={handleCurrencyChange} w={100} placeholder={'EUR'}>
            {Object.keys(conversionRates).map((curr) => {
                return(<option key={curr} value={curr}>{curr}</option>)
            })}
        </Select>

             
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}