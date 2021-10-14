import React, { useRef } from 'react';
import { Stack, Flex, Box, Text, useColorModeValue } from "@chakra-ui/react";

function CollectionItem({name, imageUrl, price}) {

    const ref = useRef();
    const textColor = useColorModeValue("gray.600", "#fff");

    return (
        <Flex direction="column" w="100%" _hover={{opacity: "0.8"}} onMouseEnter={() => ref.current.style.display="flex"} onMouseLeave={() => ref.current.style.display="none"}>
            <Flex bgImage={imageUrl} justify="center"  h="380px" bgSize="cover" mb="6px">
                <Flex ref={ref} alignSelf="flex-end" align="center" color="gray.700" justify="center" bg="#fff" p="16px 10px" border="1px solid black" mb="12px" w="70%" cursor="pointer" display="none" _hover={{bg: "black", color: "#fff"}}>
                    <Text fontSize="md" fontWeight="bold" >ADD TO CART</Text>
                </Flex>    
            </Flex>
            <Flex justify="space-between">
                <Text fontSize="lg" color={textColor} fontWeight="normal" >{name}</Text>
                <Text fontSize="lg" color={textColor} fontWeight="normal">{`${price}$`}</Text>
            </Flex>
        </Flex>
    )
}

export default CollectionItem
