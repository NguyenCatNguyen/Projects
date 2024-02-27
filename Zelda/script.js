/*
- Get all entries: https://botw-compendium.herokuapp.com/api/v3/compendium/all
- Get category entries: https://botw-compendium.herokuapp.com/api/v3/compendium/category/<category>

*/

// Varible to access the entries list
const entryList = document.querySelector(".entries__lists")

async function main(){
    const entries = (await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all"));
    const entriesData = await entries.json();
    
    //Access the array
    const entriesArray = entriesData.data.sort((a,b)=>  a.id - b.id); //Sort  array in order
    entryList.innerHTML = entriesArray.map((entry)=>itemHTML(entry)).join("");
    
}


document.getElementById('equipmentButton').addEventListener('click', () => FetchCategory('equipment'));
document.getElementById('treasureButton').addEventListener('click', () => FetchCategory('treasure'));
document.getElementById('materialsButton').addEventListener('click', () => FetchCategory('materials'));
document.getElementById('creatureButton').addEventListener('click', () => FetchCategory('creatures'));
document.getElementById('monsterButton').addEventListener('click', () => FetchCategory('monsters'));

const category__btn = document.querySelectorAll('#equipmentButton, #treasureButton, #materialsButton, #creatureButton, #monsterButton');

// Fetch Category button 
async function FetchCategory(category){
    category__btn.classList.remove("button__select");
    const entries = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`)
    const entriesData = await entries.json();
    document.getElementById(category).add("button__select");

    // Access the data and sort it base on ID
    const entriesArray = entriesData.data.sort((a,b)=>  a.id - b.id); //Sort  array in order
    entryList.innerHTML = entriesArray.map((entry)=>itemHTML(entry)).join("");
}


// Get entry data
function itemHTML(entry){
    return`
    <div class="entries__card">
                    <img src="${entry.image}"" alt="" class="entry__img">
                    <div class="entry__info">
                        <p class="entry__id">${entry.id}</p>
                        <h3 class="entry__name">
                            ${entry.name}
                        </h3>
                    </div>
                </div>
    `
}

main();