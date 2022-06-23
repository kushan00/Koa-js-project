import axios from 'axios';


let purchaseList = "http://localhost:5000/" + "purchase/getAllPurchases";
let createNewPurchase = "http://localhost:5000/" + "purchase/createPurchase";

export async function getallPurchases() { 
    return await axios.get(purchaseList);
}

export async function CreatePurchase(data,total) {
    console.log("url",createNewPurchase);
    let alldata ={
        data:data,
        total:total
    }
    return await axios.post(createNewPurchase,alldata);
}
