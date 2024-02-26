/*
- Get all entries: https://botw-compendium.herokuapp.com/api/v3/compendium/all
- Get category entries: https://botw-compendium.herokuapp.com/api/v3/compendium/category/<category>

*/

// Varible to access the entries list
const entryList = document.querySelector(".entries__lists")

async function main(){
    const entries = (await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all"));
    const entriesData = await entries.json();
    // entryList.innerHTML = entriesData.map((entry)=>itemHTML(entry)).join("");
    console.log(entriesData)
}


// Get entry data
function itemHTML(entry){
    return`
    <div class="entries__card">
                    <img src="${entry.image}"" alt="" class="entry__img">
                    <div class="entry__info">
                        <h3 class="entry__name">
                            ${entry.name}
                        </h3>
                        <p class="entry__id">${entry.id}</p>
                    </div>
                </div>
    `
}
main();