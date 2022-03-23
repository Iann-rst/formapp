import React from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import Form from '../../components/Form';
import Header from '../../components/Header';
import { Container } from './styles';

export function SignIn() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Header />
            <Form />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
