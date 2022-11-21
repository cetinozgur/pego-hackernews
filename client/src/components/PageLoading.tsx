import { BreedingRhombusSpinner } from "react-epic-spinners";
import { Box } from "@chakra-ui/react";

export const PageLoading = ({ color, size }: { color: string; size?: number }) => {
  return (
    <Box h="100vh" w="100vw" display="flex" justifyContent="center" alignItems="center">
      <BreedingRhombusSpinner color={color} size={size} />;
    </Box>
  );
};
