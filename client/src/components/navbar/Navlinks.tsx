import { HStack } from "@chakra-ui/react";
import { NavLink } from "./Navlink";

const Links = ["Dashboard", "Projects", "Team"];

export const NavLinks = () => {
  return (
    <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
      {Links.map((link) => (
        <NavLink key={link}>{link}</NavLink>
      ))}
    </HStack>
  );
};
