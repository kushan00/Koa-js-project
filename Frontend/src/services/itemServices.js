import axios from 'axios';


let itemList = "http://localhost:5000/" + "Items/getAllItems";
let createNewItem = "http://localhost:5000/" + "Items/createItem";
let getItemById = "http://localhost:5000/" + "Items/getItemByID/";
let UpdateIdById = "http://localhost:5000/" + "Items/updateItemByID/";

export async function getallItems() { 
    return await axios.get(itemList);
}

export async function CreateItem(data) {
    const alldata = {
        ItemName:data.ItemName,
        brandName:data.brandName,
        model:data.model,
        price:data.price
    }

    console.log("url",createNewItem);
  
    return await axios.post(createNewItem,alldata);
}

export async function getItemsByID(ID) { 
    let newurl = getItemById + ID;
    return await axios.get(newurl);
}

export async function UpdateItem(data,ID) {
    const alldata = {
        ItemName:data.ItemName,
        brandName:data.brandName,
        model:data.model,
        price:data.price
    }
    let newurl = UpdateIdById + ID;
  
    return await axios.post(newurl,alldata);
}
