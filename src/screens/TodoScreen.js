import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
  Button,
  Modal,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { unmountComponentAtNode } from "react-dom";
import { Component } from "react/cjs/react.development";

import { NavigationContainer } from "@react-navigation/native";
import { FAB } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { setupUser } from "../redux/userSlice";
import { setupTodos } from "../redux/todoSlice";
import setupToken from "../redux/tokenSlice";

function TodoScreen({ route, navigation }) {
  console.log("*****************TODO SCREEN İÇİNDEYİZ*******************");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [profile,setProfile]=useState([])
  let [isVisible, setIsVisible] = useState(true);
  dispatch = useDispatch();

  const datafromtodoslice = useSelector((state) => state.todos);
  console.log(
    "tooooooooooooooooooooooooooooddddoooooooossss",
    datafromtodoslice
  );

  const token = useSelector((state) => state.token.value);

  // function handleOnPress(){

  //console.log(",,,,,,,,,,,,,,,,",token);
  //console.log("::::::::::::::::::::::",username);

  const Item = ({
    talepAciklama,
    id,
    bakimKayitTarihSaat,
    talepEden,
    durum,
    isAciklama,
    sehir,
    firma,
  }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("TodoDetailScreen", { id: id })}
    >
      <View style={styles.item}>
        <Text style={styles.title}>Numara:{id}</Text>
        <Text style={styles.title}>Şehir:{sehir}</Text>
        <Text style={styles.title}>Firma:{firma}</Text>
        <Text style={styles.title}>Talep Eden:{talepEden}</Text>
        <Text style={styles.title}>Talep:{talepAciklama}</Text>
        <Text style={styles.title}>Tarih:{bakimKayitTarihSaat}</Text>
        <Text>
          ------------------------------------------------------------------------------
        </Text>
        <Text style={styles.title}>{durum}</Text>
        <Text style={styles.title}>{isAciklama}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item
      talepAciklama={item.talepAciklama}
      id={item.id}
      bakimKayitTarihSaat={item.bakimKayitTarihSaat}
      talepEden={item.talepEden}
      durum={item.durum}
      isAciklama={item.isAciklama}
      sehir={item.sehir}
    />
  );

  const loadProfile = async () => {
    console.log("loadProfile  içindeyiz");

    await fetch("http://192.168.1.6:8000/api/user/" + route.params.username, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setupUser(data));
        console.log("User çağrıldı 200 response geldi --> ", data);
      })
      .catch((error) => console.log(error));
  };

  const loadData = async () => {
    console.log("loadData içindeyiz");

    await fetch("http://192.168.1.6:8000/api/todo", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setData(data);
        dispatch(setupTodos(data));
      })
      //.catch(error=>console.log(error))
      .finally(setLoading(false));
  };

  useEffect(() => {
    console.log("UseEffect in içindeyiz");
    loadProfile();
    //loadData();
    navigation.addListener("focus", () => loadData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshing={loading}
        onRefresh={() => loadData()}
      />
      <FAB
        title="+"
        visible={isVisible}
        placement="right"
        size="large"
        upperCase={true}
        color="green"
        fontSize={24}
        onPress={() => navigation.navigate("TodoAddScreen")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#DFDFDF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
});

export default TodoScreen;
