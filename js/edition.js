
// REQUISIÇÃO GET PARA PEGAR DADOS DO EVENTO DE ID COMPATÍVEL COM O URL

const url = `https://xp41-soundgarden-api.herokuapp.com/events/`;
const urlParam = new URLSearchParams(window.location.search);
console.log(urlParam)
const idParam = urlParam.get("id");
console.log(idParam)



function fetchApi () {
    fetch(url)
    .then(response => response.json())
    .then(data => { 
        
        console.log(data)
        data.map((item => {
            if (item._id == idParam) {
                var idItem = item._id
                
                document.querySelector("#nome").value = item.name
                document.querySelector("#atracoes").value = item.attractions
                document.querySelector("#descricao").value = item.description
                document.querySelector("#data").value = item.scheduled.split("T")[0]
                document.querySelector("#lotacao").value = item.number_tickets
                

            } 
            
        }))
    })
}
fetchApi()


// REQUISIÇÃO PUT PARA EDITAR DADOS DO EVENTO ATRAVÉS DO FORM ELEMENTS
const urlToPut = 'https://xp41-soundgarden-api.herokuapp.com/events/';
const form = document.querySelector("form")
form.onsubmit = async (evento) => {
    evento.preventDefault();
    try {
       
        const eventoAtualizado = {
            name : form.elements['nome'].value,
            poster: "https://i.imgur.com/fQHuZuv.png",
            attractions : [ 
                form.elements['atracoes'].value
            ],
            description : form.elements['descricao'].value,
            scheduled : new Date(form.elements['data'].value),
            number_tickets : form.elements['lotacao'].value
        };

        

        const options = {
            method: "PUT",
            body: JSON.stringify(eventoAtualizado),
            headers: {
                "Content-Type": "application/json",
            },
        }

        const resposta = await fetch(urlToPut + idParam, options);
        const conteudoResposta = await resposta.json();
        console.log(conteudoResposta)
        console.log(resposta.status)
        if (resposta.status == 200) {
            alert('Edição feita com sucesso!')
        }
       
    }catch (error) {
        console.log(error);
        alert("Deu ruim");
    }

}
