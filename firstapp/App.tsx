import React from "react"

import {
  View,
  SafeAreaView, 
  Text,
  Button,
  Alert,
  StyleSheet,
  useColorScheme
} from "react-native"

function App(): JSX.Element{
  const isDarkMode = useColorScheme() === "dark"
  console.log("app started")
  return(
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Hello world
        </Text>
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>
  )
}

// creating styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems: "center",
   justifyContent: "center"
  },
  whiteText:{
    color: "white"
  },
  darkText:{
    color: "black"
  }
})
export default App