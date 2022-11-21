import React from "react";
import { Text,View } from "react-native";
//import axios from 'axios';
//const axios = require('axios').default;
/*
const getPopularMovie=async()=>{
    const resp=await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=a4f1348188b7d89d87f6f683a678ceae'
    );
    console.log(JSON.stringify(resp.data.results[0],null,2))
}
*/
const App=()=>{
//  getPopularMovie();
  return(
    <View>
      <Text style={{fontFamily:'DancingScript-Bold'}}>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>
      <Text>Hello World</Text>

      <Text>Hello World</Text>
    </View>
  )
}

export default App;