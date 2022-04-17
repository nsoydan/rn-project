import { View, Text,SafeAreaView,StyleSheet,StatusBar,FlatList } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-web';

const DATA = [
{
id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
title: 'First Item',
},
{
id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
title: 'Second Item',
},
{
id: '58694a0f-3da1-471f-bd96-145571e29d72',
title: 'Third Item',
},
{
id: '58694d0f-3da1-471f-bd96-145571e29d72',
title: 'Fourth Item',
},
{
id: '58d694a0f-3da1-471f-bd96-145571e29d72',
title: 'fifth Item',
},
{
id: '58694a0f-3da1-47v1f-bd96-145571e29d72',
title: 'sixth Item',
},
{
id: '58694a0f-3da1-47d1f-bd96-145571e29d72',
title: 'seventh Item',
},
{
id: '58694a0f-3da1-471f-bdd96-145571e29d72',
title: 'eighth Item',
},
{
id: '58694a0f-3da1-471f-bd96-145571ve29d72',
title: 'nineth Item',
},
{
id: '58694a0f-3da1-471f-bd96-145571ev29d72',
title: 'tenth Item',
},
];

const Item = ({ title }) => (
<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
</View>
);

const renderItem = ({ item }) => (
<Item title={item.title} />
);

const MenuScreen = () => {
return (
<SafeAreaView style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

  </SafeAreaView>
  )
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

export default MenuScreen
