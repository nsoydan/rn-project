import { View, Text,SafeAreaView,StyleSheet,StatusBar,FlatList,TouchableOpacity } from 'react-native'
import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import { unmountComponentAtNode } from 'react-dom';
import { Component } from 'react/cjs/react.development';
import { Button } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';





const Item = ({ title,id}) => (
    <TouchableOpacity onPress={ handlePress} >
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{id}</Text>
        </View>
    </TouchableOpacity>
);


const renderItem = ({ item }) => (
    <Item title={item.talepAciklama} id={item.id} />
    
);


function TodoScreen({route}) {

    console.log("todoscreen içindeyiz");
    console.log("token :::: ", route.params.token)
    console.log("USER------------------------------------->>>>>", route.params.user)
    
    const [data , setData]=useState([])
    const [loading,setLoading]=useState(true)
    const [profile ,setProfile]=useState({})
    
    //setProfile(route.params.user)


    const handlePresss=({navigation})=>{
        navigation.navigate('TodoDetailScreen');
    }

    const loadData=()=>{
        console.log("loadData içindeyiz");
        
        fetch('http://88.225.241.198:887/api/todo',{
            method:"GET",
            headers:{                 
                "content-type":"application/json",
                "Authorization":"Bearer "+route.params.token 
            },

        }).then(response=>response.json())
        .then(data=>setData(data))
        //.catch(error=>console.log(error))
        .finally(setLoading(false))
    }
    
    useEffect(()=>{
        console.log("UseEffect in içindeyiz");
        loadData();

    },[])    

    return (
        <SafeAreaView style={styles.container}>
               
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} refreshing={loading} onRefresh={()=>loadData()} />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({ 
    container:{
            flex: 1,
            marginTop: StatusBar.currentHeight || 0,
        },
    item:{
        backgroundColor: '#DFDFDF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        },
    title:{
        fontSize: 18,
        },
    });

export default TodoScreen;
