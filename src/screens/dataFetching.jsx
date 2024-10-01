import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import axios  from 'axios'

export default DataFetching =()=>{
       const [data ,setData]=useState();
    useEffect(async() => {
        const resp =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=8", params);       
        const data =await resp.json()
        console.log(data)
        setData(data)
    },[])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => console.log(json))
    }, []);

    useEffect(()=>{
        
        axios.get("https://jsonplaceholder.typicode.com/posts",{params: {
            _limit: 10
           }})
              .then((resp)=>setData(resp.data))
                 
    })

    return(

        <View>
            <FlatList
            data={data}
            renderItem={({item})=><Text>{item.id} - {item.title}</Text>}
            />
        </View>
    )
}