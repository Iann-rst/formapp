import React from 'react';
import { Container } from './styles';
import { Alert } from 'react-native';
import { Input } from '../Input';
import { ControlledInput } from '../ControlledInput';
import Button from '../Button';
import { useForm } from 'react-hook-form';

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

/**
   * Poderia usar estados (useState) para validar os dados do input do formulário, 
   * mas fica muito verboso o código
   * 
   *    REACT HOOK FORM 
   *  Principais vantagens: 
   *  - Reduzir a verbosidade do código
   *  - Deixar as validações mais simples
   *  - Evitar a utilização de muitos estados
   * 
   * função handleSubmit do useForm: vai buscar as informações do formulário 
   * que estão sendo controladas e administradas pelo react-hook-form
   * 
   *  VALIDAÇÃO UTILIZANDO YUP
   *  - Validações baseadas em schemas
   */

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

//Schemas para validações do YUP
const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe a senha"),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'A senha de confirmação não confere')
});

export default function Form() {

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleUserRegister(data: FormData) {
    /*Todas as informações dos inputs estão nessa variável data */

    console.log(data)
  }

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        icon={"user"}
        placeholder="Nome"
        error={errors.name}
      />
      <ControlledInput
        name="email"
        control={control}
        icon={"mail"}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize='none'
        error={errors.email}
      />
      <ControlledInput
        name="password"
        control={control}
        icon={"lock"}
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />
      <ControlledInput
        name="passwordConfirm"
        control={control}
        icon={"lock"}
        placeholder="Confirma-Senha"
        secureTextEntry
        error={errors.passwordConfirm}
      />

      <Button
        title="Cadastrar"
        onPress={handleSubmit(handleUserRegister)}
        activeOpacity={0.7} />
    </Container>
  );
}