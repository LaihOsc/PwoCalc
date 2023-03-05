import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    CircularProgress,
    CircularProgressLabel
  } from '@chakra-ui/react';
  

  export default function ProductCard({product, perServing, total, rating, currency}) {
    const {name, img} = product
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              yeet
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                {perServing} | {total}
                
              </Text>
            </Stack>
            <Text fontWeight={800} fontSize={'xl'}>{currency}</Text>
            <CircularProgress 
            size={100} 
            value={rating}
            color={
                rating >= 75
                ? 'green.400':
                 75 >= rating && rating >= 50
                ? 'orange.400':
                 50 >= rating && rating >= 40
                ? 'red.400': 'red.800'
            }
            >
                <CircularProgressLabel>{rating}%</CircularProgressLabel>
            </CircularProgress>
          </Stack>
        </Box>
      </Center>
    );
  }