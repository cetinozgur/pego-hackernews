import { useAuth0 } from "@auth0/auth0-react";
import { Layout } from "@/components/Layout";

export const ProfilePage = () => {
  const { user } = useAuth0();
  console.log(user);

  return (
    <Layout>
      <p>hello.</p>
    </Layout>
  );
};
