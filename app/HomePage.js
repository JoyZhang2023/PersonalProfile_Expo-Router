import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href={{
        pathname: "/AboutPage",
        params: {id: 'about'}
      }}>
        Go To About Page
      </Link>
      <Link href={{
        pathname: "/UserProfilePage",
        params: {id: 'Username placeholder'}
      }}>
        Go To User Profile Page
      </Link>  

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
});
