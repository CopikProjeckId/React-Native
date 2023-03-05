import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from './src/components/atom/Icons';
import { LocalImage } from './src/components/atom/LocalImage';
import { RemoteImage } from './src/components/atom/RemoteImage';
import { Typography } from './src/components/atom/Typography';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={18}> 
        이것은 
        <Typography color='blue' fontSize={24}> 
          텍스트
        </Typography>
        입니다. 
      </Typography>
      
      <LocalImage localAsset={require('./assets/favicon.png')} width={50} height={50}/>
      <RemoteImage uri = {`https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} 
      width = {150} height = {100}/>

      <Icon name = 'home' size={40} color='blue'></Icon>
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
