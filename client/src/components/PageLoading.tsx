import { IntersectingCirclesSpinner } from "react-epic-spinners";
import { Box, Text } from "@chakra-ui/react";

interface PageLoadingProps {
  color?: string;
  size?: number;
  desc?: string;
}

export const PageLoading = ({ color = "black", size = 40, desc }: PageLoadingProps) => {
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <IntersectingCirclesSpinner color={color} size={size} />
      <Text as={"i"} mt={10}>
        {desc}
      </Text>
    </Box>
  );
};
