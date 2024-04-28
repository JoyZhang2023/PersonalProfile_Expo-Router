import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function UserProfilePage() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>User Profile Page</Text>
      <Text>User Name: {id} </Text>
      <Link replace href={"/HomePage"}>Back to Home Page</Link>
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
