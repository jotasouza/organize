import { Flex, Text, Grid, Image, Heading, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LogoPrimary from "../../assets/logo-primary.svg";
import { Input } from "../../components/Form/input";

export const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();

  return (
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
          <Image src={LogoPrimary} alt="Organize" boxSize="150px" />
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
          borderColor="yellow.400"
          borderRadius="4px"
          bg="yellow.400"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack mt="6" spacing="5">
            <Input
              placeholder="Digite seu login"
              icon={FaEnvelope}
              name="email"
            />
            <Input
              placeholder="Digite sua senha"
              icon={FaLock}
              {...register("password")}
            />
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
