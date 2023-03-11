import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/Molcule/Header/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <Header>
          <Header.Title title ='HEADER'></Header.Title>
        </Header>
      </View>
    </SafeAreaProvider>
  );
}


/** Safe 이전 기존 작업물 */

/* <Typography fontSize = {16} color ='black'>Text</Typography>
        <Spacer space = {20}></Spacer>
        <LocalImage localAsset={require('./assets/favicon.png')} width={50} height={50}/>
        <Spacer space = {20}></Spacer>
        <Divider></Divider>
        <Spacer space = {20}></Spacer>
        <RemoteImage uri = {`https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} 
          width = {150} height = {100}/>
        {/* <HeaderWithoutCompound title='HEADER' ></HeaderWithoutCompound>
        <Header>
          <Header.Group>
            <Header.Icon IconName='arrow-back' onPress = {() => {
              console.log('back');
            }}></Header.Icon>
          </Header.Group>
          
          <Header.Title title='HEADER'></Header.Title>
          <Header.Icon IconName='close'onPress = {() => {
              console.log('close');
            }}></Header.Icon>
        </Header> */

// import { Badge } from './src/components/atom/Badge';
// import { Button } from './src/components/atom/Button';
// import { Divider } from './src/components/atom/Divider';
// import { Icon } from './src/components/atom/Icons';
// import { LocalImage } from './src/components/atom/LocalImage';
// import { RemoteImage } from './src/components/atom/RemoteImage';
// import { Spacer } from './src/components/atom/Spacer';
// import { Typography } from './src/components/atom/Typography';
// import { TabIcon } from './src/components/Molcule/TapIcon';
// import { Header } from './src/components/Molcule/Header/Header';
// import { HeaderWithoutCompound } from './src/components/Molcule/HeaderWithoutCompound';

// <View style={styles.container}>

    //   <TabIcon name='home' visibles={true}/>
      
    //   <TabIcon name='home' visibles={false}/>
    //   {/* <Typography color='red' fontSize={18}> 
    //     이것은 
    //     <Typography color='blue' fontSize={24}> 
    //       텍스트
    //     </Typography>
    //     입니다. 
    //   </Typography>
      
    //   <LocalImage localAsset={require('./assets/favicon.png')} width={50} height={50}/>
    //   <RemoteImage uri = {`https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} 
    //   width = {150} height = {100}/>

    //   <Divider></Divider>
    //   <Icon name = 'home' size={40} color='blue'></Icon>

    //   <View style={{flexDirection: 'row'}}>
    //     <Badge fontSize={10}>
    //       <Typography>BADGE</Typography>
    //     </Badge>
    //     <Badge fontSize={5}>
    //     <Icon name = 'home' size={50} color='black'></Icon>
    //     </Badge>
    //   </View>

    //   <Spacer space = {20}></Spacer>

    //   <View style={{flexDirection: 'row'}}>
    //     <Button onPress={()=>{
    //       console.log('BTN PRESSED');
    //     }}>
    //       <Typography> TEXT BUTTON </Typography>
    //     </Button>

    //     <Button onPress={()=>{
    //       console.log('BTN PRESSED');
    //     }}>
    //       <Icon name = 'home' size={40} color='blue'></Icon>
    //     </Button>
    //   </View> */}
    // </View>

    
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
