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
import { AntDesign } from '@expo/vector-icons';

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
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todo}
            onChangeText={(value) => {
              setTodo(value);
            }}
          />
          <Button title="Add todo" onPress={handleAddTodo} />
        </View>

        {/* list todo */}
        <View style={styles.listTodo}>
          <Text
            style={{
              marginBottom: 10,
              padding: 10,
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
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
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
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 40,
  },

  form: {
    // flex: 2,
  },

  listTodo: {
    flex: 1,
  },

  todo: {
    borderBottomWidth: 1,
    borderColor: 'green',
    borderRadius: 15,
    padding: 10,
    margin: 15,
  },

  groupTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginHorizontal: 10,
    padding: 15,
    borderStyle: 'dashed',
    borderWidth: 1,
  },

  todoItem: {
    fontSize: 20,
  },
});
