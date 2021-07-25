import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';
import { Size } from '../../utils/Typography';

interface InputProps{
  focus?: boolean;
}

export const InputConatiner = styled.View<InputProps>`
  flex-direction: row;
  align-items: center;
  
  padding-left: 27px;
  padding-right: 27px;

  width: 334px;
  height: 60px;

  background: ${props=> props.focus ? Colors.backgroundPressedInput : Colors.backgroundDefaultInput};
  border-radius: 10px;
`;
export const Input = styled.TextInput<InputProps>`
  width: 100%;
  height: 60px;

  padding-left: 12px;
  color: ${Colors.black};

  font-size: ${Size.decription};

  border-radius: 10px;
`;
