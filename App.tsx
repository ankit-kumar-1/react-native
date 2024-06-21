import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>Hello, I am your cat</Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Give me some food, please!' : 'Thank you!'}
      />
    </View>
  );
};

export default App;
