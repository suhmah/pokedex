import React, { Children, useState } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../utils/Colors';

import { Touchable } from './styles';

interface ButtonProps {
  selected?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  selected,
  onPress
}) => {

  return (
    <Touchable selected={selected} onPress={() => onPress()}>
      <Text style={{ color: selected ? Colors.white : Colors.gray }}>{children}</Text>
    </Touchable>
  );
}

export default Button;