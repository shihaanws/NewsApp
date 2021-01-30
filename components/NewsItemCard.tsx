import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import { Button } from 'react-bootstrap';
import { Linking } from 'expo';
import { Feather } from '@expo/vector-icons';

interface NewsItemCardProps{
    heading:string;
    url:string;
    commentsUrl: string;
}

export const NewsItemCard = ({heading,url,commentsUrl}:NewsItemCardProps)=>{
    return(
        <TouchableOpacity 
        onPress={async()=>{
         await Linking.openURL(url)
        }}
        key={`key-${heading}-${url}`} style={styles.container}>
          <Text style={styles.headerText}>{heading}</Text>
          {/* <Text>{url}</Text> */}
          {/* <Text >{commentsUrl}</Text> */}

          <TouchableOpacity 
          onPress={async ()=>await Linking.openURL(commentsUrl)}>
            <Feather style={styles.comments} name={"message-circle"} size={24}/>
           <Text style={styles.texter}>Comment</Text>

          </TouchableOpacity>
      
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    padding: 24,
    margin:20,
    borderRadius:8,
    shadowColor:"#000",
    shadowOffset:{
      width:0,
      height:7,
    },
    shadowOpacity:0.41,
    shadowRadius:9.11,
    elevation:14,
  },
  headerText:{
    fontSize:20,
    fontWeight:"500",
    marginBottom:4,
  },
  comments:{
    color:'#ff6600',
    paddingLeft:15 ,
    
  }
});