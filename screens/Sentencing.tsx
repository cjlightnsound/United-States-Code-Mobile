import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';

import { Text, View } from '../components/Themed';
import PDFReader from 'rn-pdf-reader-js'
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';
export default function Sentencing({navigation}) {

  const conditionalRender = () => { 
    if (Platform.OS === 'web') {
   return (
     <>
    <Text style={styles.title}>Federal Sentencing Guidelines</Text>
    <View style={styles.separator} lightColor="tan" darkColor="rgba(255,255,255,0.1)" />
    </>
   )
   
  } else {
    return (<View style={styles.pdfStyle}>
    <WebView 
      style={styles.container}
      source={{ uri: 'https://united-states-code.netlify.app/prelimusc33' }}
    />
        </View>
    )
  } 
}
  return (
    <View style={styles.container}>
      {conditionalRender()}


    </View>
  );
}

const styles = StyleSheet.create({
  pdfStyle: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      height: '100%',
      width: '100%'
    
  },
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
  
  
});
