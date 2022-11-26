import { IntersectingCirclesSpinner } from "react-epic-spinners";

interface PageLoadingProps {
  color?: string;
  size?: number;
  desc?: string;
}

export const PageLoading = ({ color = "black", size = 40 }: PageLoadingProps) => {
  return <IntersectingCirclesSpinner color={color} size={size} />;
};
