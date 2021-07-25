import styled from 'styled-components/native';
import { Colors } from '../../utils/Colors';

interface TouchableProps {
  selected?: boolean
}

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  height: 60px;
  width: 334px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: ${props => props.selected ? Colors.type.typPsychic : Colors.backgroundDefaultInput};
`;
