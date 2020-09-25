import React, { Fragment } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import evoxLogo from "../../assets/evoxLogo.png";

import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from "./styles";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={evoxLogo} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input name="name" icon="user" placeholder="Usuário"></Input>
            <Input name="email" icon="mail" placeholder="E-mail"></Input>
            <Input name="password" icon="lock" placeholder="Senha"></Input>
            <Button onPress={() => {}}>Cadastrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignInButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
      </BackToSignInButton>
    </Fragment>
  );
};
export default SignUp;
