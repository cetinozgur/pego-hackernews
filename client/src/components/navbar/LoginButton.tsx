import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <Button as={"a"} fontSize={"sm"} fontWeight={400} variant={"link"} onClick={handleLogin}>
      Sign In
    </Button>
  );
};
