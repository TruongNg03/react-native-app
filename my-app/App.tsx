import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>();
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Name: {name}</Text>
        <TextInput
          multiline
          onChangeText={(value) => setName(value)}
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 15,
            opacity: 0.5,
            width: 200,
            padding: 15,
          }}
        />
      </View>

      <View>
        <Text style={styles.header}>Age: {age}</Text>
        <TextInput
          multiline
          onChangeText={(value) => setAge(+value)}
          style={{
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 15,
            opacity: 0.5,
            width: 200,
            padding: 15,
          }}
          keyboardType="numeric"
          maxLength={3}
        />
      </View>

      <Text style={styles.parent}>count: {count}</Text>
      <View>
        <Button color={'#314520'} title="btn" onPress={() => setCount(count + 1)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hello1: {
    color: 'red',
    fontSize: 60,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  parent: {
    fontSize: 60,
    color: 'green',
  },
});
