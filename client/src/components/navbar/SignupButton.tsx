import { Button } from "@chakra-ui/react";

export const SignupButton = () => {
  return (
    <Button
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      bg={"orange.400"}
      // href={"#"}
      _hover={{
        bg: "orange.300",
      }}
    >
      Sign Up
    </Button>
  );
};
