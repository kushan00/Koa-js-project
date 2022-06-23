import axios from 'axios';


let WishList = "http://localhost:5000/" + "WishList/getAllWishLists";
let createNewWishList = "http://localhost:5000/" + "WishList/createWishList";

export async function getallWishList() { 
    return await axios.get(WishList);
}

export async function CreateWishList(data) {
    return await axios.post(createNewWishList,data);
}
