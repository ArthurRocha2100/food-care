const serchForm = document.querySelector('form');
const serchContainerResult = document.getElementById('container-result');
const servhContainer = document.querySelector('container');
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
}

function generateHTML(results) {
    let generatedHTML = '';

    results.map(item => {

        generatedHTML += 
        `
        <div class="p-2 border bg-light shadow-lg rounded-3"  style="--bs-bg-opacity: .9;">
            <img class="w-100 rounded-3" src="${item.recipe.image}" alt="Foto do prato">
            <div class="d-flex justify-content-between mt-2">
                <p>${item.recipe.label}</p>
                <a href="${item.recipe.url}" target="_blank" >Ver receita</a>
            </div>
            <p>Calorias: ${item.recipe.calories.toFixed(2)}</p>
        </div>
        ` 
    });

    serchContainerResult.innerHTML = generatedHTML;
}