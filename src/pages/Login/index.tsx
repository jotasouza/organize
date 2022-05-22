import { Flex, Text, Grid, Image } from "@chakra-ui/react";
import LogoPrimary from "../../assets/logo-primary.svg";

export const Login = () => (
  <Flex
    alignItems={"center"}
    padding={"10px 15px"}
    height={"100vh"}
    bgGradient={"linear(to-r, gray.800 65%, yellow.400 35%)"}
    color={"gray.50"}
  >
    <Flex
      w="100%"
      justifyContent="center"
      flexDirection="row"
      alignItems="center"
    >
      <Grid w="100%" paddingRight="100px">
        <Image src={LogoPrimary} />
      </Grid>
    </Flex>
  </Flex>
);
