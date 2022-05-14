import React from "react";
import { Box, chakra, Icon, useColorModeValue } from "@chakra-ui/react";

export const Feature = (props) => {
  return (
    <Box>
      <Icon
        boxSize={12}
        color={useColorModeValue("brand.700")}
        mb={4}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {props.icon}
      </Icon>
      <chakra.h3
        mb={3}
        fontSize="lg"
        lineHeight="shorter"
        fontWeight="bold"
        color={useColorModeValue("gray.900")}
      >
        {props.title}
      </chakra.h3>
      <chakra.p
        lineHeight="tall"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {props.children}
      </chakra.p>
    </Box>
  );
};
