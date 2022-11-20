import { Link, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink as RouterLink } from "react-router-dom";

interface NavlinkProps {
  children: ReactNode;
  destination: string;
}

export const NavLink = ({ children, destination }: NavlinkProps) => (
  <Link
    as={RouterLink}
    to={destination}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
  >
    {children}
  </Link>
);
