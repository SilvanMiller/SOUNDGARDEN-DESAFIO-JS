// document.querySelector("#nome").value = "Festival Coala"
    //document.querySelector("#atracoes").value = "Miley Cyrus, Liniker, Smashing Pumpkins"
   // document.querySelector("#descricao").value = "Festival"
  //  document.querySelector("#data").value = "2022-03-05T23"
  //  document.querySelector("#lotacao").value = "20000"
    const url = `https://xp41-soundgarden-api.herokuapp.com/events/62b7313601f6c8724c8d09c6`;



    function fetchApi () {
        fetch(url)
        .then(response => response.json())
        .then(data => { 
            console.log(data.name)
            document.querySelector("#nome").value = data.name
            document.querySelector("#atracoes").value = data.attractions
            document.querySelector("#descricao").value = data.description
            document.querySelector("#data").value = data.scheduled
            document.querySelector("#lotacao").value = data.number_tickets


            
               
        })


        
        
       
    }
    fetchApi()