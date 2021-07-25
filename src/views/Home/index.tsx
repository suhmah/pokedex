import React, { useState } from 'react';
import { Text } from 'react-native';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { Colors } from '../../utils/Colors';

const Home: React.FC = () => {

  const [selected, setSelected] = useState(false);

  const onpressButton = () => {
    setSelected(!selected);
  }

  return (
    <Container background={Colors.white}>
      <Button onPress={onpressButton} selected={selected}>
        <Text style={{ color: selected ? Colors.white : Colors.gray }}>oi</Text>
      </Button>
    </Container>
  );
}

export default Home;