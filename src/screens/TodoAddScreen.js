import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  Button,
  ImageStore,
} from "react-native";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/dunya.gif";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import axios from "axios";
import { useSelector } from "react-redux";
//import * as ImagePicker from 'expo-image-picker';
import { Permission } from "expo";
import * as ImagePicker from "react-native-image-picker";
function TodoAddScreen({ navigation, route }) {
  const [firma, setFirma] = useState("");
  const [talep, setTalep] = useState("");

  let [sehir, setSehir] = useState("");

  const [image, setImage] = useState(null);

  const [formdatastate, setFormdatastate] = useState({});

  const token = useSelector((state) => state.token.value);
  const user = useSelector((state) => state.user.user.first_name);

  console.log("*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");
  console.log("*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");
  console.log("*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-");

  console.log("---TOKEN------------------->>>>>", token);
  console.log("---USER------------------->>>>>", user);
  console.log("-------------IMAGE----------", image);

  var formdata = new FormData();

  formdata.append("talepAciklama", talep);
  formdata.append("talepEden", user);
  formdata.append("sehir", sehir);
  formdata.append("firma", firma);

  if (image != null) {
    console.log("image boş değil");

    const ext = image.uri.substring(image.uri.lastIndexOf(".") + 1);
    // const fileName=image.uri.replace(/^.*[\\\/])/,"");

    console.log("ext : ::", ext);
    //console.log("filename : : ",fileName)

    formdata.append("ilkfoto", {
      uri: image.uri,
      type: `image/${ext}`,
      name: "fileName",
    });
  }

  const options = {
    title: "Select Image",
    type: "library",
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: "photo",
      includeBase64: false,
    },
  };

  const resimAl = async () => {
    console.log("sssssssssssssssssssssssssssssss");
    const result = await ImagePicker.launchImageLibrary(options, (response) =>
      console.log(response)
    );
  };

  const takePicture = () => {};

  //     ///////    TELEFONDAN SEÇİM     //////
  //     const selectPicture= ()=>{
  //       //await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //       console.log("select picture çalıştı")
  //       let selectedImage= ImagePicker.launchImageLibraryAsync({
  //         aspect:[4,3],
  //         allowsEditing:true,
  //         quality:1
  //       });
  //       console.log("!!!!!!!!!!SELECTED IMAGE !!!!!!!!!!",selectedImage)

  //       if(!selectedImage.cancelled){
  //         setImage(selectedImage.uri)
  //       }

  //       formdata.append('ilkfoto',{
  //         uri:image.uri,
  //         type:image.type,
  //         name:"dosya1"
  //       })
  //     }

  //     //// KAMERA İLE ÇEKİM  ///////

  //     const takePicture= async ()=>{
  //         //await Permissions.askAsync(Permissions.CAMERA);
  //         let result = await ImagePicker.launchCameraAsync({
  //           mediaTypes: ImagePicker.MediaTypeOptions.All,
  //           allowsEditing: false,
  //           aspect: [4, 3],
  //           quality: 1,
  //         });

  //         console.log(result);

  //         setImage(result)

  //         //console.log("++++++++++++ ",formdata)

  // }

  const handleAddTodo = () => {
    console.log("FOOOOOOOOOOOOOOOORM DATA: ", formdata);

    fetch("http://192.168.1.6:8000/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data;boundary=------",
        Authorization: "Bearer " + token,
      },

      body: JSON.stringify(formdata),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
    //.finally(navigation.navigate('TodoScreen'))
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Yeni Talep eklemek için formu doldurunuz</Text>
      <CustomInput placeholder="firma" value={firma} setValue={setFirma} />
      <CustomInput placeholder="talep" value={talep} setValue={setTalep} />
      <CustomInput placeholder="sehir" value={sehir} setValue={setSehir} />
      <Button title="Resim seç" onPress={resimAl} />
      <Button title="Kamera" onPress={takePicture} />
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 400, height: 300 }}
        />
      )}
      <CustomButton text="Ekle" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default TodoAddScreen;
