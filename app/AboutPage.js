import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';


export default function AboutPage() {
  
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
      <Pressable style={styles.button} onPress={()=> router.replace('/HomePage')}>
        <Text>Back to Home Page using replace method</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={()=> router.push('/HomePage')}>
        <Text style={styles.buttonlabel}>Back to Home Page using push method</Text>
      </Pressable>
      <StatusBar style="auto" />
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
  button: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
