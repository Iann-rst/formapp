import React from 'react';
import { Container } from './styles';
import { Alert } from 'react-native';
import Input from '../Input';
import Button from '../Button';

export default function Form() {

  function handleUserRegister() {
    Alert.alert('Cadastrar Usuário!')
  }

  return (
    <Container>
      <Input
        icon={"user"}
        placeholder="Nome"
      />
      <Input
        icon={"mail"}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
      />
      <Input
        icon={"lock"}
        placeholder="Senha"
        secureTextEntry
      />
      <Input
        icon={"lock"}
        placeholder="Confirma-Senha"
        secureTextEntry
      />

      <Button
        title="Cadastrar"
        onPress={handleUserRegister}
        activeOpacity={0.7} />
    </Container>
  );
}