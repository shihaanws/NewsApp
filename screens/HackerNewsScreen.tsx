import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import { NewsItemCard } from '../components/NewsItemCard';


export const HackerNewsScreen =()=>{
const [stories,setStories]= React.useState(null);
React.useEffect( () => {
  (async () => {
    try {
      let response = await fetch(
        'https://hn.algolia.com/api/v1/search_by_date?numericFilters=points%3E250'

      );
      let json = await response.json();
      const mapHitsToStories = json.hits.map((hit)=>({
        heading: hit.title,
        url:hit.url,
        commentsUrl: `https://news.ycombinator.com/item?id=${hit.objectID}`,
      }));
      setStories(mapHitsToStories);
      
    } catch (error) {
      console.error(error);
    }
})();
},[]);
    return(
        <>
      <FlatList 
      data={stories}
       renderItem={({item})=>{
         return ( 
         <NewsItemCard
           key={item.url}
         heading={item.heading}
         url={item.url}
         
         commentsUrl={item.commentsUrl}
         />
    );
    
       }}
       ListHeaderComponent={()=> <Text style={styles.text}>Hacker News</Text>}
         />
        </>
    )
}


const styles = StyleSheet.create({
   
    text:{
      backgroundColor:'#ff6600',
      textAlign:'center',
      color:'white',
      fontSize:28,
      fontWeight:900,
    }
  });
  
