import React from 'react';

import { Container, Titulo, SubTitulo } from './styles';

export default function Header() {
  return (
    <Container>
      <Titulo>
        Crie sua {`\n`} conta.
      </Titulo>
      <SubTitulo>
        Faça seu cadastro de {`\n`} forma rápida e fácil.
      </SubTitulo>
    </Container>
  );
}