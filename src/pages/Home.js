import React, { useState, useEffect } from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';


export function Home(){

  const [newSkill, setNewSkill] = useState('');  
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState(''); 

  function handleAddNewSkill(){

    setMySkills(oldState => [...oldState, newSkill]);

  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    

      if(currentHour < 12){
        setGretting('Good Morning')
      }else if(currentHour >= 12 && currentHour < 18){
        setGretting('Good Afternoon')
      }else{
        setGretting('Good Nigth')
      }

  },[]);

  
  return(
    <View style={styles.container}>
     
        <Text style={styles.title}>Welcome, Francisco</Text>
        <Text style={styles.greetings}>
         {gretting}
        </Text>
        <TextInput 
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />
     

        <Text style={[styles.title, {marginVertical:50}]}>
            My Skills   
        </Text>

       

        <FlatList 
          data={mySkills}
         keyExtractor={item => item}
         renderItem={({item}) => (
          <SkillCard skill={item} />
         )}
        />

    

  {/* {
        mySkills.map(skill =>(
            <SkillCard key={skill} skill={skill} />
      ))
  }  */}

 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 10

  },
  greetings:{
    color: '#fff'
  }
})