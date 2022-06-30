// 1- CRIAR EVENTO// REALIZADO, FALTA INSERIR O CAMPO PARA BANNER DO EVENTO



const nome = document.querySelector('#nome');
const atracoes = document.querySelector('#atracoes')
const descricao = document.querySelector('#descricao')
const data = document.querySelector('#data')
const lotacao = document.querySelector('#lotacao')
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com"
const form = document.querySelector("form")
 
form.onsubmit = async (evento) => {
    evento.preventDefault();
    try {
       
        const newEvento = {
            name : nome.value,
            poster: "https://i.imgur.com/fQHuZuv.png",
            attractions : [ 
                atracoes.value
            ],
            description : descricao.value,
            scheduled : new Date(form.elements['data'].value),
            number_tickets : lotacao.value,
        };

        // const newEvento = {
        //     name: "Evento teste 2",
        //     poster: "https://i.imgur.com/fQHuZuv.png",
        //     attractions: [
        //         atracoes.value
        //     ],
        //     description: "evento incrivel",
        //     scheduled: "2022-03-24T00:57:37.761Z",
        //     number_tickets: 10,
        // };

        // console.log(form.elements['data'].value);

        const options = {
            method: "POST",
            body: JSON.stringify(newEvento),
            headers: {
                "Content-Type": "application/json",
            },
        }


        const resposta = await fetch(`${BASE_URL}/events`, options);
        const conteudoResposta = await resposta.json();
        console.log(conteudoResposta);
        console.log(resposta)
        if (resposta.status == 201) {
            alert('Evento Criado com sucesso!')
        }

    } catch (error) {
        console.log(error);
        alert("Deu ruim");
    }

}


