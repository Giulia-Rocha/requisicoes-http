const Carro = require('./carro');

// CRIANDO REQUISIÇOES CRUD PARA TESTAR A API

// GET
function Get(){
    return fetch( "https://api-generator.retool.com/Kq7wQH/carros")
    .then((response)=> response.json())
    .then((data)=>console.log(data));
}

//Get();

// requisição POST
async function postData(url='' , data={}){
    const response = await fetch(url, {
        method: 'POST',
        mode:'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:{
            'Content-type':'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return response.json();
}

const carro = new Carro(11,"Ford", "Fiesta", "populares", 2010, 20300, 30000);

//postData('https://api-generator.retool.com/Kq7wQH/carros', carro)
//    .then((data)=>{
 //       console.log(data);
  //  })


// PUT
    async function putData(url='' , data={}){
        const response = await fetch(url, {
            method: 'PUT',
            mode:'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers:{
                'Content-type':'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }

const carroAtualizado = new Carro(11,"Ford", "Ranger", "populares", 2010, 20300, 30000)
//putData('https://api-generator.retool.com/Kq7wQH/carros/11', carroAtualizado)
//.then((data)=>{
//    console.log(data);
//})

// DELETE
async function deleteData(url=''){
    const response = await fetch(url, {
        method: 'DELETE',
        mode:'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers:{
            'Content-type':'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        
    });
    return response.json();
}

deleteData('https://api-generator.retool.com/Kq7wQH/carros/11')
.then((data)=>{
    console.log(data);
})