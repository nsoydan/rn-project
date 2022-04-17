import { View, Text,SafeAreaView,StyleSheet,StatusBar,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import axios from 'axios';
import { unmountComponentAtNode } from 'react-dom';

const DATA = [];

const Item = ({ title }) => (
    <TouchableOpacity>
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const renderItem = ({ item }) => (
    <Item title={item.title} />
);




function YolHaritasiListesiScreen() {

    
        
    
    return (
        <SafeAreaView style={styles.container}>
               
                <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: StatusBar.currentHeight || 0,
},
item: {
backgroundColor: '#DFDFDF',
padding: 20,
marginVertical: 8,
marginHorizontal: 16,
},
title: {
fontSize: 18,
},
});

export default YolHaritasiListesiScreen;
