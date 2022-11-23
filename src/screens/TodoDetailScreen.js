import { View, Text,Button,Image} from 'react-native'
import React from 'react'
import { FAB } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';

const TodoDetailScreen = ({route,navigation}) => { 

  console.log("------------------Todo details içinde ..............")
  
  const userFirstName = useSelector((state) => state.user.user.first_name)
  const todos = useSelector((state) => state.todos.todos)
  const token=useSelector((state)=>state.token.value)
  console.log("USER NAME :",userFirstName);
  //console.log("TOKEN:",token)
  //console.log("++++++++++",todos);

  dispatch=useDispatch()


  let todo=todos.find((todo)=> todo.id == route.params.id)
  //console.log("/////////",todo)
  //console.log("/////////",todo.id)
  const id=todo.id  

  const handleOnDelete=(todo)=>{
    console.log("onDelete çalıştı+++++++++++++++++");
    

     fetch('http://127.0.0.1:8000/api/todo/' + id,{
            method:"DELETE",
            headers:{                 
              "content-type":"application/json",
              "Authorization":"Bearer "+ token 
             },

           }).then(response=>console.log(response.status))
           .catch(error=>console.log(error))
           .finally(navigation.navigate('TodoScreen'))
  
          
           
          dispatch(removeTodo(id));
        
  
          }



  const DeleteButton = ({talepEden}) => {
    if(userFirstName == todo.talepEden){
      return <Button title="Sil" onPress={handleOnDelete}/>
    }
    else {
      return null
    }
  }


  return (
    <View  style={{
      alignItems: 'center',
      justifyContent:'center',
      flex: 1,
    }}>
      <Text>Talep Detayları</Text>

      <Text>{todo.id}</Text>
      <Text>{todo.firma}</Text>
      <Text>{todo.talepAciklama}</Text>
      <Text>{todo.bakimKayitTarihSaat}</Text>
      <Text>{todo.talepEden}</Text>
      <Text>{todo.isBitisTarihi}</Text>
      <Text>{todo.isiYapan}</Text>
      <Image source={{ uri: todo.ilkfoto }} style={{ width: 200, height: 200 }} />
      
        
      <DeleteButton />

    </View>
  )
}

export default TodoDetailScreen