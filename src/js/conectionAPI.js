const serchForm = document.querySelector('form');
const serchContainerResult = document.getElementById('container-result');
const servhContainer = document.querySelector('serch');
let serchQuery = '';

const APP_ID = 'e22e0479';
const APP_KEY = '4c30577ef3ac23791bc999ac8b6e546f';

serchForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    serchQuery = e.target.querySelector('input').value;
    fetchAPI()
})

async function fetchAPI(q) {
    const urlBase = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${serchQuery}&to=20`
    const response = await fetch(urlBase);
    const data = await response.json();
    generateHTML(data.hits)
    console.log(data);
}cn

async function fetchAPI2(string){
    const baseURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${string}&app_id=${APP_ID}&app_key=${APP_KEY}&random=true&to=18&from=0`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    let generatedHTML = '';

    results.map(item => {

        generatedHTML += 
        `
        <div class="p-2 border bg-light shadow-lg rounded-3"  style="--bs-bg-opacity: .9;">
            <img class="w-100 rounded-3" src="${item.recipe.image}" alt="Foto do prato">
            <div class="mt-2">
                <p>${item.recipe.label}</p>
                <p>Calorias: ${item.recipe.calories.toFixed(2)}</p>
                <a href="${item.recipe.url}" target="_blank" >Ver receita</a>
            </div>
        </div>
        ` 
    });

    serchContainerResult.innerHTML = generatedHTML;
}