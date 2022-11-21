import { Layout } from "@/components";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, GridItem, Box, Avatar, Heading, Text, Center } from "@chakra-ui/react";

export const ProfilePage = () => {
  const { user } = useAuth0();
  console.log(user);

  return (
    <Layout>
      <Grid h="100vh" gap={5} templateRows="1fr" templateColumns="1fr 2fr">
        <GridItem py={12} px={6} border="1px solid black">
          <Box>
            <Center>
              <Avatar
                size={"2xl"}
                src={user?.picture}
                //   alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
            </Center>

            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {user?.name}
            </Heading>
            <Text fontSize={"xl"}>{user?.nickname}</Text>
          </Box>
        </GridItem>
        <GridItem py={12} px={6} border="1px solid black">
          personal content, favs, stories etc..
        </GridItem>
      </Grid>
    </Layout>
  );
};
