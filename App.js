import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import CheckBox from 'react-native-check-box';
// import CusIcon from './src/Config/Components/icon';
// import CusInput from './src/Config/Components/input';
import cusColors from './src/Utils/colors';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [index, setIndex] = useState('');

  const addHandler = () => {
    if (inputText > -1) {
      listItems[index] = inputText;
      setListItems([...listItems]);
    } else {
      setListItems([...listItems.push(inputText)]);
    }
  };
  const delHandler = val => {
    setListItems(...listItems.splice(val, 1));
  };
  const editHandler = ind => {
    setIndex(ind);
    setInputText(ind);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setInputText(e)}
          value={inputText}
        />
      </View>
      <Button color="yellowgreen" title='Add Todos' />
      <Text>{inputText}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: 0.88,
  },
  headerView: {
    width: "100%",
    height: "12%",
    backgroundColor: "yellowgreen"
  },
  inputView: {
    width: '100%',
    height: '88%',
    paddingHorizontal: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'yellow',
  },
  input: {
    
  },
  headerText: {
    color: cusColors.lightYellow,
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 70,
  },
  todoView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  linkText: {
    width: 80,
    fontWeight: '600',
    borderBottomWidth: 1.7,
    fontSize: 12,
    marginTop: 8,
    alignSelf: 'flex-end',
    color: cusColors.lightYellow,
    borderBottomColor: 'black',
  },
  button: {
    width: '40%',
    height: 40,
    padding: 8,
    marginTop: 20,
    fontSize: 18,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 4,
    backgroundColor: cusColors.lightYellow,
  },
  buttonText: {
    color: cusColors.onyxBlack,
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginOptions: {
    flexDirection: 'row',
    width: '100%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: cusColors.lightYellow,
    borderBottomLeftRadius: 70,
    backgroundColor: cusColors.onyxBlack,
  },
  text: {
    color: cusColors.lightYellow,
    height: 20,
    marginRight: 10,
  },
});

export default App;
