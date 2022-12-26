import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [time, setTime] = useState(0.0);
  const sendApiRequest = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
  }
  // send 100 requests to the API and calculate the average time
  const buttonClick = async () => {
    let totalTime = 0;
    for (let i = 0; i < 100; i++) {
      const startTime = Date.now();
      await sendApiRequest();
      const endTime = Date.now();
      totalTime += endTime - startTime;
    }
    setTime(totalTime / 100.0);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollStyle}>
        <Text style={styles.text}>Your average time for API request: {time}ms</Text>
      </ScrollView>
      <TouchableOpacity onPress={buttonClick}>
        <View style={styles.circleFloatingButton}>
          <Text style={styles.textFloatingButton}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circleFloatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: '#2196f3',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFloatingButton: {
    color: '#fff',
    fontSize: 30,
  },
  scrollStyle: {
    flex: 1,
  },
  centeredItem: {
    textAlign: 'center',
    alignSelf: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
})