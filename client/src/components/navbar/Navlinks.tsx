import { HStack } from "@chakra-ui/react";
import { NavLink } from "./Navlink";
import { paths } from "./Paths";

export const NavLinks = () => {
  return (
    <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
      {paths.map(({ text, url }) => (
        <NavLink key={text} destination={url}>
          {text}
        </NavLink>
      ))}
    </HStack>
  );
};
