import {
  Flex,
  Text,
  Grid,
  Image,
  Heading,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
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
        <Heading as="h1">Do jeito fácil e grátis</Heading>
        <Text>
          Inteligente, simples e atrativo
          <b> Gerencie seus projetos em uma única plataforma</b>
        </Text>
      </Grid>
      <Grid
        as="form"
        mt="4"
        w="100%"
        padding="30px 15px"
        border="3px solid"
        borderColor="gray.100"
        borderRadius="4px"
        bg="white.0"
        color="gray.900"
      >
        <Heading size="lg">Bem vindo!</Heading>
        <VStack mt="6" spacing="5">
          <Input placeholder="Digite seu email" />
          <Input placeholder="Digite sua senha" />
          <Button>Entrar</Button>
        </VStack>
      </Grid>
    </Flex>
  </Flex>
);
