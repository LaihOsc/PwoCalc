import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Select,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import {
  GiAcid
} from 'react-icons/gi'


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);




export default function Nav({handleCurrencyChange, conversionRates, currency, tab, handleTabChange}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Stack direction={'column'} align={'center'}>
          <GiAcid />
          <Text fontWeight={'bold'}>TOPWO</Text>
         
          </Stack>
          
          


          <Flex w={500} flexDir={'row'} justifyContent={'space-between'}>
            <Button value={'landingPage'} onClick={handleTabChange} colorScheme={tab == 'landingPage' ? 'green' : null}>Home</Button>
            <Button value={'leaderboards'} onClick={handleTabChange} colorScheme={tab == 'leaderboards' ? 'green' : null}>Leaderboards</Button>
            <Button value={'duel'} onClick={handleTabChange} colorScheme={tab == 'duel' ? 'green' : null}>Duel</Button>
            <Button value={'calculator'} onClick={handleTabChange} colorScheme={tab == 'calculator' ? 'green' : null}>Calculator</Button>
            
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