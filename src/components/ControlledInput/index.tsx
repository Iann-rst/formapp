import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

import { Input, InputProp } from '../Input';

import { Error } from './styles';

type Props = InputProp & {
  control: Control<any>;
  name: string;
  error?: FieldError;
}

/**
 * Controller vai renderizar o input e controlar o conteudo de cada input sem precisar de estados
 * 1º Ele tem que ter o nome único
 * 2º Quem que ta controlando ele
 * 3º O que quero renderizar (nesse caso o Input)
 */

export function ControlledInput({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      {
        error && <Error>{error.message}</Error>
      }
    </>
  )
}
