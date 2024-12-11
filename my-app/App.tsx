import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [students, setStudent] = useState([
    { id: 1, name: 'test1', age: 18 },
    { id: 2, name: 'test2', age: 19 },
    { id: 3, name: 'test3', age: 20 },
    { id: 4, name: 'test4', age: 21 },
    { id: 5, name: 'test5', age: 22 },
    { id: 6, name: 'test6', age: 23 },
    { id: 7, name: 'test7', age: 24 },
    { id: 8, name: 'test8', age: 25 },
    { id: 9, name: 'test9', age: 26 },
    { id: 10, name: 'test10', age: 27 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>hello world!</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id + ''}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                padding: 20,
                backgroundColor: 'pink',
                marginBottom: 20,
                borderRadius: 15,
              }}
            >
              <Text style={{ fontSize: 15 }}>{item.name}</Text>
            </View>
          );
        }}
      />

      {/* <ScrollView>
        {students.map((student) => {
          return (
            <View
              key={student.id}
              style={{
                padding: 20,
                backgroundColor: 'pink',
                marginBottom: 20,
                borderRadius: 15,
              }}
            >
              <Text>{student.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

// css
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
