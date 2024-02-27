/*
- Get all entries: https://botw-compendium.herokuapp.com/api/v3/compendium/all
- Get category entries: https://botw-compendium.herokuapp.com/api/v3/compendium/category/<category>

*/

// Initial variable
const entryList = document.querySelector(".entries__lists")

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


async function main(){
    const entries = (await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all"));
    const entriesData = await entries.json(); //Convert the data to JSON
    // Access the data and sort it base on ID
    const entriesArray = entriesData.data.sort((a,b)=>  a.id - b.id);
    entryList.innerHTML = entriesArray.map((entry)=>itemHTML(entry)).join("");
    
}



// Fetch Category button 
async function FetchCategory(category){

    const entries = await fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category}`)
    const entriesData = await entries.json();

    // Access the data and sort it base on ID
    const entriesArray = entriesData.data.sort((a,b)=>  a.id - b.id); //Sort  array in order
    entryList.innerHTML = entriesArray.map((entry)=>itemHTML(entry)).join("");
}

// Loading screen
function showLoadingScreen(element, duration) {
    // Add loading class to the element
    element.classList.add('loading');

    // Remove loading class after the specified duration
    setTimeout(() => element.classList.remove('loading'), duration);
}

// Get start button 
function start_function(){
    document.querySelector(".landing").classList.add("hidden");
    setTimeout(() => {
        document.querySelector(".category__List").classList.add("appear");
        document.querySelector(".entries").classList.add("visible");

    }, 600);
}


// Run the method
main();
document.getElementById('equipmentButton').addEventListener('click', () => FetchCategory('equipment'));
document.getElementById('treasureButton').addEventListener('click', () => FetchCategory('treasure'));
document.getElementById('materialsButton').addEventListener('click', () => FetchCategory('materials'));
document.getElementById('creatureButton').addEventListener('click', () => FetchCategory('creatures'));
document.getElementById('monsterButton').addEventListener('click', () => FetchCategory('monsters'));


