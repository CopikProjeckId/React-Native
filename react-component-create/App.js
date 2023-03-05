import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/atom/Typography';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={18}> 이것은 텍스트입니다. </Typography>
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
