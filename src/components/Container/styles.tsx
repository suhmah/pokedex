import styled from 'styled-components/native';
import { ContainerProps } from '../../Types/Container';
import { Colors } from '../../utils/Colors';

export const Main = styled.SafeAreaView <ContainerProps>`
  flex: 1;
  background-color: ${props=> props.background ? props.background : Colors.white};
  ;

`;
