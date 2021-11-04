import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [enteredGoal, setenteredGoal] = useState("")
  const [goals, setgoals] = useState([])

  const goalInputHandler = (e) => {
    setenteredGoal(e)
  }

  const addGoal = () => {
    setgoals([...goals ,{id:Math.random().toString()  , value:enteredGoal}])
    setenteredGoal(" ")
  }

  const removeGoal = (g_del) => {
    setgoals(
      e => {
        return e.filter((goal) => goal.id !== g_del )
      }
    )
  }

  return (
    <View style={styles.screen}>
      <Text>Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput style={{borderColor:'black', borderWidth:1, padding:8, width:"80%"}} 
          placeholder="Today's Goals..."
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button 
          style={{marginTop:2}} 
          title={"Add"}
          onPress={addGoal}
        />
      </View>
      <View> 
        <ScrollView vertical> 
          {
            goals.map((goal, _i) => <TouchableOpacity style={styles.listItems} onPress={removeGoal} ><Text key={goal}>{_i+1} - {goal}</Text></TouchableOpacity>)
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:20,
    paddingTop: 100
  },
  inputContainer:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center"
  },
  listItems:{
    padding:10,
    backgroundColor:"#ccc",
    borderColor:'black',
    borderWidth:1,
    marginVertical:4
  }
});