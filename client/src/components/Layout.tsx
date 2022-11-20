import { Navbar } from "./navbar/Navbar";
import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box p={10}>{children}</Box>
    </>
  );
};
