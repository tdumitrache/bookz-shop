import React from 'react';
import { Box } from "@chakra-ui/react";
import  MenuList from "../components/MenuList";

function Home() {
    return (
        <Box minH="1000px">
            <Box minH="600px" w="80vw" mx="auto">
                <MenuList />
            </Box>
        </Box>
    )
}

export default Home
