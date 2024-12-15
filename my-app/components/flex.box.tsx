import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'flex-end',
    // borderWidth: 1,
    // borderColor: 'red',
  },

  item1: {
    backgroundColor: 'violet',
    padding: 10,
  },

  item2: {
    backgroundColor: 'orange',
    padding: 10,
  },

  item3: {
    backgroundColor: 'cyan',
    padding: 10,
  },

  item4: {
    backgroundColor: 'green',
    padding: 10,
  },
});

function FlexBox() {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>item1</Text>
      </View>

      <View style={styles.item2}>
        <Text>item2</Text>
      </View>

      <View style={styles.item3}>
        <Text>item3</Text>
      </View>

      <View style={styles.item4}>
        <Text>item4</Text>
      </View>
    </View>
  );
}

export default FlexBox;
