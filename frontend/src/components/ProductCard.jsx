import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue} from '@chakra-ui/react'
import React from 'react'
import {MdDelete, MdEditSquare} from "react-icons/md"

const ProductCard = (product) => {
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")
  return (
    <Box shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition='all 0.3s'
        _hover={{transform: "translateY(-5p}", shadow: "x1"}}
        bg={bg}
    >
    
    <Image src={product.image} alt={product.image} h={48} w="full" objectFit='cover' />
  
    <Box p={4}>
        <Heading as='h3' size="md" mb={2}>
            {product.name}
        </Heading>

        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
            ${product.price}
            </Text>

        <HStack spacing={2}>
            <IconButton icon={<MdEditSquare />} colorScheme='blue' />
            <IconButton icon={<MdDelete />} colorScheme='red' />
        </HStack>
    
   
    </Box>
    </Box>
  )
}

export default ProductCard