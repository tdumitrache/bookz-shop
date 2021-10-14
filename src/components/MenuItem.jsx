import React, {useRef} from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { withRouter } from "react-router-dom";

function MenuItem({ title, image, isLarge, history, match, link}) {
  const textColor = useColorModeValue("gray.700", "#fff");
  const ref = useRef();

  console.log(history, link);

  return (
    <Flex
      align="center"
      justify="center"
      bgImage={image}
      minW="30%"
      flex="1 1 auto"
      m="8px"
      h={isLarge ? "380px" : "240px"}
      bgSize="cover"
      bgPosition="center center"
      border="1px solid black"
      cursor="pointer"
      transition="all .5s ease"
      _hover={{transform: "scale(95%)"}}
      onMouseEnter={() => ref.current.style.opacity = '0.95'}
      onMouseLeave={() => ref.current.style.opacity = '0.7'}
      fontFamily='Poppins'
      onClick={() => history.push(`${match.url}${link}`)}
    >
      <Flex
      ref={ref}
        align="center"
        justify="center"
        border="1px solid black"
        bg="#fff"
        transition="all .5s ease"
        opacity="0.7"
        w="175px"
        p="12px"
        textAlign="center"
      >
        <Flex direction="column">
          <Text
            color={textColor}
            fontSize="xl"
            fontWeight="bold"
            mb="6px"
          >
            {title}
          </Text>
          <Text
            color="gray.500"
            fontSize="md"
            textTransform="uppercase"
            fontWeight="normal"
          >
            Shop Now
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default withRouter(MenuItem);
