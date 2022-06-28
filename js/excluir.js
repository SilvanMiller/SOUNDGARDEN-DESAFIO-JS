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
                document.querySelector("#data").value = item.scheduled
                document.querySelector("#lotacao").value = item.number_tickets
                

            }
        }))
    })
}
fetchApi()


// REQUISIÇÃO DELETE PARA APAGAR O EVENTO DA BASE DE DADOS

const urlToPut = 'https://xp41-soundgarden-api.herokuapp.com/events/';
const form = document.querySelector("form")
form.onsubmit = async (evento) => {
    evento.preventDefault()
    
    try {
       
        
        

        const options = {
            method: "DELETE",
            body: "",
            headers: {
                "Content-Type": "application/json",
            },
        }

        const resposta = await fetch(urlToPut + idParam, options);
        console.log(resposta.status)
        
       
    }catch (error) {
        console.log(error);
        alert("Deu ruim");
    }

}
