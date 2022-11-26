import { Navbar, Nav, Stack } from "rsuite";

export const Footer = () => {
  return (
    <Navbar style={{ padding: "1rem 0" }}>
      <Stack justifyContent="center" alignItems="center">
        <p>Hacker News Ⓒ 2022</p>
      </Stack>
    </Navbar>
  );
};
