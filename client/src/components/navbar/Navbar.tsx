import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "./Navlink";
import { UserMenu } from "./UserMenu";
import { AuthButtons } from "./AuthButtons";
import { NavLinks } from "./Navlinks";
import { Logo } from "./Logo";
import { paths } from "./Paths";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated } = useAuth0();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Logo />
          <NavLinks />
        </HStack>
        {isAuthenticated ? <UserMenu /> : <AuthButtons />}
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {paths.map(({ text, url }) => (
              <NavLink key={text} destination={url}>
                {text}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
