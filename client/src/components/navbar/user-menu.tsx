import { useAuth0 } from "@auth0/auth0-react";
import { Stack, Nav } from "rsuite";
import { UserInfo } from "@rsuite/icons";
import ExitIcon from "@rsuite/icons/Exit";
import DocPassIcon from "@rsuite/icons/DocPass";
import { NavLink } from "./navlink";

export const UserMenu = () => {
  const { logout, user } = useAuth0();

  console.log(user);

  const handleLogout = () => logout();

  return (
    <Stack spacing={2}>
      <p>
        <strong>Welcome, </strong> {user?.name}
      </p>
      <Nav.Menu title="" placement="bottomEnd">
        <Nav.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as </p>
          <strong>{user?.nickname}</strong>
        </Nav.Item>
        <Nav.Item divider />
        <Nav.Item icon={<UserInfo />} as={NavLink} to="/profile">
          Your profile
        </Nav.Item>
        <Nav.Item icon={<DocPassIcon />} as={NavLink} to="/favourites">
          Your favourites
        </Nav.Item>
        <Nav.Item divider />
        <Nav.Item as={"a"} icon={<ExitIcon />} onClick={handleLogout}>
          Sign out
        </Nav.Item>
      </Nav.Menu>
    </Stack>
  );
};
