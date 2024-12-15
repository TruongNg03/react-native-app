import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState('');
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert('Lỗi input todo', 'Todo không được để trống', [
        {
          text: 'Xác nhận',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(2, 1000), name: todo }]);
    setTodo('');
  };

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodo);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>Todo App</Text>

        {/* form */}
        <View>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => {
              setTodo(value);
            }}
          />
          <Button title="Add todo" onPress={handleAddTodo} />
        </View>

        {/* list todo */}
        <View style={styles.body}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 20,
            }}
          >
            list todo: {todo}
          </Text>
          <FlatList
            data={listTodo}
            keyExtractor={(item) => item.id + ''}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                  onPress={() => deleteTodo(item.id)}
                >
                  <Text style={styles.todoItem}>{item.name}</Text>
                </Pressable>
              );
            }}
          />
        </View>

        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

// css
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 40,
  },

  body: {
    paddingHorizontal: 10,
  },

  container: {
    paddingTop: 30,
    // paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  todoInput: {
    borderBottomWidth: 1,
    borderBlockColor: 'green',
    borderRadius: 15,
    padding: 10,
    margin: 15,
  },

  todoItem: {
    fontSize: 20,
    padding: 10,
    marginBottom: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
});
