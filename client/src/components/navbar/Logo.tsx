import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Logo = () => {
  return (
    <Box>
      <Text
        as={NavLink}
        to={"/home"}
        fontFamily={"heading"}
        color={useColorModeValue("gray.800", "white")}
        fontWeight="bold"
        _hover={{
          cursor: "pointer",
        }}
      >
        Hacker News
      </Text>
    </Box>
  );
};
