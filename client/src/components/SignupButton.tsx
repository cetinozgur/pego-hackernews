import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
    });
  };

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
      onClick={handleSignUp}
    >
      Sign Up
    </Button>
  );
};
