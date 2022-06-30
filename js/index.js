// REQUISIÇÃO PUT PARA EDITAR DADOS DO EVENTO ATRAVÉS DO FORM ELEMENTS



//EVENTO1 - festival coala
const urlToPost = 'https://xp41-soundgarden-api.herokuapp.com/bookings';
const form1 = document.querySelector("#formreserva1")
form1.onsubmit = async (evento) => {
    evento.preventDefault();
    try {

        const reserva = {

            owner_name: form1.elements['nome'].value,
            owner_email: form1.elements['email'].value,
            number_tickets: form1.elements['quantidade'].value,
            event_id: '62bb4163fbed55d808f14044'

        };



        const options = {
            method: "POST",
            body: JSON.stringify(reserva),
            headers: {
                "Content-Type": "application/json",
            },
        }

        const resposta = await fetch(urlToPost, options);
        const conteudoResposta = await resposta.json();
        console.log(conteudoResposta)
        console.log(resposta.status)
        if (resposta.status == 201) {
            alert('Reserva realizada com sucesso!')
        }

    } catch (error) {
        console.log(error);
        alert("Deu ruim");
    }

}

//EVENTO2 - indie fest
const urlToPost2 = 'https://xp41-soundgarden-api.herokuapp.com/bookings';

const form2 = document.querySelector("#formreserva2")
form2.onsubmit = async (evento) => {
    evento.preventDefault();
    try {

        const reserva = {

            owner_name: form2.elements['nome'].value,
            owner_email: form2.elements['email'].value,
            number_tickets: form2.elements['quantidade'].value,
            event_id: '62bb422cfbed55d808f1405b'

        
        };



        const options = {
            method: "POST",
            body: JSON.stringify(reserva),
            headers: {
                "Content-Type": "application/json",
            },
        }

        const resposta = await fetch(urlToPost2, options);
        const conteudoResposta = await resposta.json();
        console.log(conteudoResposta)
        console.log(resposta.status)
        if (resposta.status == 201) {
            alert('Reserva realizada com sucesso!')
        }

    } catch (error) {
        console.log(error);
        alert("Deu ruim");
    }

}


//EVENTO3 - bourbonjazz
const urlToPost3 = 'https://xp41-soundgarden-api.herokuapp.com/bookings';

const form3 = document.querySelector("#formreserva3")
form3.onsubmit = async (evento) => {
    evento.preventDefault();
    try {

        const reserva = {

            owner_name: form3.elements['nome'].value,
            owner_email: form3.elements['email'].value,
            number_tickets: form3.elements['quantidade'].value,
            event_id: '62bb3a15fbed55d808f13f27'


        };



        const options = {
            method: "POST",
            body: JSON.stringify(reserva),
            headers: {
                "Content-Type": "application/json",
            },
        }

        const resposta = await fetch(urlToPost3, options);
        const conteudoResposta = await resposta.json();
        console.log(conteudoResposta)
        console.log(resposta.status)
        if (resposta.status == 201) {
            alert('Reserva realizada com sucesso!')
        }

    } catch (error) {
        console.log(error);
        alert("Deu ruim");
    }

}