const establishmentName = document.getElementById('m-establishment');
const publicPlace = document.getElementById('m-public-place');
const imageEstablishment = document.getElementById('m-image-establishment');
const contact = document.getElementById('m-contact');
const webSite = document.getElementById('m-web-site');
const botaoSalvar = document.getElementById('btnSalvar');
const botaoIncluit = document.getElementById('new');
const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const establishmentImg = document.querySelector('m-establishment-img');

const API_ID = 'HH3Vf5HoRpqmZWOAKeiOFFogqRF9ChBf3A1t8ueU'
const API_JS_KEY = 'UtzG0cKaLjZD7zVajXV60J5aiXMS0xx7EQRBiofg'

Parse.initialize(API_ID,API_JS_KEY);
Parse.serverURL = 'https://parseapi.back4app.com/';

const parseQuery = new Parse.Query('Establishment');

let establishment;
let id;

establishmentList();

botaoSalvar.onclick = async e => {

  if(establishmentName == null || publicPlace == null ||imageEstablishment == null || contact == null) {
    return
  }
  
  e.preventDefault();

  if (id !== undefined) {
    let establishmentList = await parseQuery.find().then();

    let establishment = new Parse.Object('Establishment');

    Es.set('objectId', listaProduto[id].id);
    establishment.set('establishment', establishmentName.value);
    establishment.set('publicPlace', publicPlace.value);
    establishment.set('contact', contact.value);
    establishment.set('webSite', webSite.value);
    establishment.set('imageEstablishment', imageEstablishment.value);

    await establishment.save();
    modal.classList.remove('active');
  }  
  else {
    establishmentAddition();
    modal.classList.remove('active');
  }

  id = undefined;
  establishmentList();
}

async function establishmentAddition() {
  
  let newEstablishment = new Parse.Object('Establishment');
  
  newEstablishment.set('establishment', establishmentName.value);
  newEstablishment.set('publicPlace', publicPlace.value);
  newEstablishment.set('contact', contact.value);
  newEstablishment.set('webSite', webSite.value);
  newEstablishment.set('imageEstablishment', imageEstablishment.value);

  
  try {    
    
    newEstablishment = await newEstablishment.save();

    if(newEstablishment !== null) {
      alert('Estabelecimento cadastrado com suceso!');
    }            
  } 
  catch (error) {
      alert('Erro ao cadastrar o estabelecimento: ' + error.message); 
  }

  establishmentList()

}

async function establishmentList() {
    tbody.innerHTML = '';
    establishment = await parseQuery.find();

    try {
        establishment.forEach( (item, index) => {
            let tr = document.createElement('tr');
 
            tr.innerHTML = `
            <td>${item.get('establishment')}</td>
            <td>${item.get('publicPlace')}</td>
            <td class="acao">
              <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
            </td>
            <td class="acao">
              <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
            </td>
            `
            tbody.appendChild(tr);
        });
    } catch{
        alert('Não há dados a serem exibidos')
    }
}

function editItem(i) {
  openModal(true, i)
}

async function deleteItem(id) {
  let listaestablishment = await parseQuery.find().then();
  let establishment = new Parse.Object('Establishment');

  establishment.set('objectId', listaestablishment[id].id);

  try{
    await establishment.destroy();
    alert('Establecimento deletedo com sucesso');
      }
  catch(error){
        alert('Falha ao deletar o objeto');
    }

    establishmentList()
}

async function openModal(edit = false, i) {
    modal.classList.add('active')
  
    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
    if (edit) {
      id = i;
    }    
}