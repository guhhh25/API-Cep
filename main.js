'use strict'


const preencherFormulario = (endereco) =>{
    document.querySelector('#endereco').value = endereco.logradouro
    document.querySelector('#bairro').value = endereco.bairro
    document.querySelector('#cidade').value = endereco.localidade
    document.querySelector('#estado').value = endereco.uf

    if(endereco.hasOwnProperty('erro')){
        document.querySelector('#endereco').value = 'O endereço nao foi encontrado!'
    document.querySelector('#bairro').value = 'O bairro nao foi encontrado!'
    document.querySelector('#cidade').value = 'A cidade nao foi encontrada!'
    document.querySelector('#estado').value = 'O estado nao foi encontrado!'
    }
}

const pesquisarCep = async () =>{

    if(cepValido(cep))
    const cep = document.getElementById('cep').value 
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const dados = await fetch(url)
    const endereco = await dados.json()
    preencherFormulario(endereco)
       
    
    

    }
    
         



document.getElementById('cep').addEventListener('focusout', pesquisarCep)