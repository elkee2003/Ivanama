import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Post from './src/components/Post';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Post/>
    </View>
  );
}
