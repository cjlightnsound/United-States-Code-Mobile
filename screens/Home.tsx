import * as React from 'react';
import { StyleSheet,useWindowDimensions, ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


// import Data
import data from '../lib/tocRules.js';

export default function Home({ navigation }: RootTabScreenProps<'RulesHome'>) {
  const { width } = useWindowDimensions();
  console.log(data)
  console.log(navigation)
  return (

    <View style={styles.container}>
       <ScrollView style={{flex:1}}>
      <Text style={styles.usc_title_head}>TITLE 1&mdash;GENERAL PROVISIONS</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.usc_title_ital_spanner}>
      This title was enacted by act July 30, 1947, ch. 388, §1, 61 Stat. 633
    </Text>
    <TouchableHighlight
      style={styles.button}
      onPress={() => {
        // Navigate using the `navigation` prop that you received
        navigation.navigate('Federal Sentencing Guidelines');

      }}
    ><Text>Sentencing Guidelines</Text></TouchableHighlight>
   </ScrollView>
    </View>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tan'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    height: 1,
    width: '100%',
  },
  usc_title_head: {
    textAlign: "center",
    fontSize: 24,
    fontStyle: "italic",
    marginTop: 50,
    marginBottom: 3,
    paddingLeft: 6,
    marginLeft: 0
  },
  usc_title_ital_spanner: {
    textAlign: "center",
    fontStyle: "italic",
marginBottom: 10
  },
  titleLink: {
  fontSize: 20,
  textAlign: "center",
  fontStyle: "italic",
  }
  
  
});
