import { Nav } from "rsuite";
import { LoginButton } from "@/components/LoginButton";
import { SignupButton } from "@/components/SignupButton";

export const AuthButtons = () => {
  return (
    <>
      <Nav.Item>
        <LoginButton />
      </Nav.Item>
      <Nav.Item>
        <SignupButton />
      </Nav.Item>
    </>
  );
};
