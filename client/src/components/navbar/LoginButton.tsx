import { Button } from "@chakra-ui/react";

export const LoginButton = () => {
  return (
    <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"} href={"#"}>
      Sign In
    </Button>
  );
};
