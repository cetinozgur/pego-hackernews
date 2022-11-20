import { Button } from "@chakra-ui/react";

export const SignupButton = () => {
  return (
    <Button
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      bg={"blue.400"}
      // href={"#"}
      _hover={{
        bg: "blue.300",
      }}
    >
      Sign Up
    </Button>
  );
};
