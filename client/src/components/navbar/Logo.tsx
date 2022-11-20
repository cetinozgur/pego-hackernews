import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Box>
      <Text fontFamily={"heading"} color={useColorModeValue("gray.800", "white")} fontWeight="bold">
        Hacker News
      </Text>
    </Box>
  );
};
