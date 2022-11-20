import {
  Flex,
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const UserMenu = () => {
  const { logout, user } = useAuth0();

  const handleLogout = () => logout();

  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
          <Avatar size={"sm"} src={user?.picture} />
        </MenuButton>
        <MenuList>
          <MenuItem as={NavLink} to="/">
            Profile
          </MenuItem>
          <MenuDivider />
          <MenuItem as={"a"} onClick={handleLogout}>
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
