import React, { useState } from 'react';
import { View } from 'react-native';

import { InputConatiner, Input } from './styles';
import Search from '../../utils/svgs/Search'

interface InputProps {
  onChange?: () => void;
  placeholder: string;
}

const InputText: React.FC<InputProps> = ({ placeholder, onChange }) => {
  const [isFocus, setFocus] = useState(false);
  console.log(isFocus)
  return (
    <InputConatiner focus={isFocus}>
      <Search />
      <Input onChangeText={onChange} placeholder={placeholder} onFocus={() => setFocus(true)} />
    </InputConatiner>
  )
}

export default InputText;