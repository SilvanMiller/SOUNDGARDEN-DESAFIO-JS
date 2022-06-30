

const url = 'https://xp41-soundgarden-api.herokuapp.com/bookings/'




function fetchApi() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
            var eventsWithId1 = data.filter(item => item.event?._id == '62be151edaf3bbc73cabfb2a')
           console.log(eventsWithId1)

           var eventsWithId2 = data.filter(item => item.event?._id == '62bdc654daf3bbc73cabf161' )
           console.log(eventsWithId2)

           var eventsWithId3 = data.filter(item => item.event?._id == '62be17abdaf3bbc73cabfb81' )
           console.log(eventsWithId3)

           let numeroReservas1 = document.querySelector("#reservas1");
           let conteudo1 = document.createTextNode(`Número de reservas: ${eventsWithId1.length}`)
           numeroReservas1.appendChild(conteudo1);
           let numeroReservas2 = document.querySelector('#reservas2');
           let conteudo2 = document.createTextNode(`Número de reservas: ${eventsWithId2.length}`)
           numeroReservas2.appendChild(conteudo2);
           let numeroReservas3 = document.querySelector("#reservas3");
           let conteudo3 = document.createTextNode(`Número de reservas: ${eventsWithId3.length}`)
           numeroReservas3.appendChild(conteudo3);

           
          
           
    
       




    })
}


fetchApi()