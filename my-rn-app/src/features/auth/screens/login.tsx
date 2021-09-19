import React from "react";
import {
  Box,
  Flex,
  Text,
  Center,
  Heading,
  Input,
  FormControl,
  Button,
} from "native-base";
import { useWindowDimensions } from "react-native";
import RenderHtml, { RenderHTML } from "react-native-render-html";

const source = {
  html: `
  <p style='text-align:center;'>
    Hello World!
  </p>`,
};

function LoginScreen() {
  const { width } = useWindowDimensions();
  return (
    <Box>
      <Center>
        <Heading size={"2xl"}>Login</Heading>

        <Text>Please enter the details below to continue</Text>

        <RenderHtml contentWidth={width} source={source} />
      </Center>

      <Box mt={10}>
        <Box mx={5} pt={5}>
          <FormControl.Label>Tên đăng nhập</FormControl.Label>
          <Input w={"100%"} />
        </Box>
        <Box mx={5} pt={10}>
          <FormControl.Label>Mật khẩu</FormControl.Label>
          <Input w={"100%"} />
        </Box>
      </Box>

      <Center pt={20}>
        <Button w={"60%"}>Đăng nhập</Button>
      </Center>
    </Box>
  );
}

export default LoginScreen;
