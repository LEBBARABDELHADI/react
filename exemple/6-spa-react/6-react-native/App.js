import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {
   const [count, setCount] = React.useState(0)
   const [data, setData] = React.useState('')
   React.useEffect(() => {
      fetch('https://www.swapi.tech/api/people/1', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(json => {
          setData(json.result.properties.name)
        })
        .catch(error => {
          console.error(error)
        })
    }, [data])
  return (
    <View style={styles.container}>
      <Text>Luke i'm always your father!</Text>
      <Text>You clicked {count} times.</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title='Click me'
        color='teal'
        accessibilityLabel='Click +'
      />
      <StatusBar style="auto" />
      <View style={{ backgroundColor: 'orangered' }}>
        <Text style={styles.sw} >{data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sw : {
    margin:10,
    color: 'white'
  }
});
