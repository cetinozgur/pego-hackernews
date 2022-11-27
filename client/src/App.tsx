import { useAuth0 } from "@auth0/auth0-react";
import { AppRoutes } from "@/routes";
import { CustomProvider } from "rsuite";
import { useAppSelector } from "./redux/hooks";
import { useDispatch } from "react-redux";
import { setAlert } from "./redux/alert-slice";
import { Layout, PageLoading } from "./components";

export const App = () => {
  const { user, isLoading, error } = useAuth0();
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme.value);

  console.log("Auth Info:", user);

  if (error) {
    dispatch(setAlert({ type: "error", message: "error.message" }));
  }

  return (
    <CustomProvider theme={theme}>
      <Layout>{isLoading ? <PageLoading /> : <AppRoutes />}</Layout>
    </CustomProvider>
  );
};
