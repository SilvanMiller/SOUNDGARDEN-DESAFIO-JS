const url = `https://xp41-soundgarden-api.herokuapp.com/events/`;



function fetchApi () {
    fetch(url)
    .then(response => response.json())
    .then(data => { 
        data.map((item => {
            if (item.name == "Festival Coala") {
                let idItem = item._id
                document.querySelector("#nome").value = item.name
                document.querySelector("#atracoes").value = item.attractions
                document.querySelector("#descricao").value = item.description
                document.querySelector("#data").value = item.scheduled
                document.querySelector("#lotacao").value = item.number_tickets
                console.log(idItem)

            }
        }))







        
           
    })


    
    
   
}
fetchApi()