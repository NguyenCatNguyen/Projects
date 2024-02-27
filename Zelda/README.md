# Zelda Compendium

## Live Site


## Why I Build This

## Technologies Used

## Features

## What I Learned
### API
#### 1 Learn how to use API to fetch data from the server
- I learn that the data I receive from the server is in a object format, so I need to convert it to an array to use the array methods.
```javascript
// Varible to access the entries list
const entryList = document.querySelector(".entries__lists")

async function main(){
    const entries = (await fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/all"));
    const entriesData = await entries.json();
    
    //Access the array
    const entriesArray = entriesData.data.sort((a,b)=>  a.id - b.id); //Sort  array in order
    entryList.innerHTML = entriesArray.map((entry)=>itemHTML(entry)).join("");
}
```

### Array
#### 1. Sort an array of objects by a property value
```javascript
const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
```
