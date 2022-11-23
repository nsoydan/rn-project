fetch('http://88.225.241.198:887/api/token',{
    method:"POST",
    headers: { 'Content-Type': 'application/json' },
    body:{ 
      "username":"ilkyaz",
      "password":"lkyz1234"
      }

    }).then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))

    } 

    //navigation.navigate('TodoScreen');