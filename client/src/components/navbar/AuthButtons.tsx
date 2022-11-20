import { Stack } from "@chakra-ui/react";
import { LoginButton } from "@/components/LoginButton";
import { SignupButton } from "@/components/SignupButton";

export const AuthButtons = () => {
  return (
    <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
      <LoginButton />
      <SignupButton />
    </Stack>
  );
};
