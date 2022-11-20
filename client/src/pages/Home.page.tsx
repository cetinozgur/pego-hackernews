import { Layout } from "@/components/Layout";

export const HomePage = () => {
  return (
    <Layout>
      <p>Unprotected route.. User will be redirected here after log out.</p>
    </Layout>
  );
};
