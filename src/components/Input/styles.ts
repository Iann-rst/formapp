import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
flex-direction: row;
margin-bottom: 8px;

`;
export const IconContainer = styled.View <Props>`
width: 56px;
height: 55px;
margin-right: 2px;
justify-content: center;
align-items: center;
background-color: #FFFFFF;


${({ isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: #DC1637;   
  `};
  /* Mudar a cor quando tiver selecionado o input*/
`;

export const InputText = styled(TextInput) <Props>`
flex: 1;
background-color: #FFFFFF;
color: #7A7A80;
padding: 0 23px;

${({ isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: #DC1637;   
  `};

  /* Mudar a cor quando tiver selecionado o input*/
`;
