import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { TextInputProps } from 'react-native';

import { Container, IconContainer, InputText } from './styles';

export type InputProp = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({ icon, value, ...rest }: InputProp) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }

  return (
    <Container>
      <IconContainer isFocused={isFocused} >
        <Feather
          name={icon}
          size={24}
          color={(isFocused || isFilled) ? '#DC1637' : '#AEAEB3'}
        />
      </IconContainer>

      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        value={value}
        {...rest}

      />
    </Container>
  )
}