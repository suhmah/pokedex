import React from 'react';
import { View } from 'react-native';
import { ContainerProps } from '../../Types/Container';

import { Main } from './styles';

const Container: React.FC<ContainerProps> = ({ children, background }) => {
  return <Main background={background}>
    {children}
  </Main>;
}

export default Container;