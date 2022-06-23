import axios from 'axios';


let cartList = "http://localhost:5000/" + "cart/getAllCarts";
let createNewItem = "http://localhost:5000/" + "cart/createCart";
let clearCart = "http://localhost:5000/" + "cart/clearCarts";

export async function getallcarts() { 
    return await axios.get(cartList);
}

export async function CreateCart(data) {

    console.log("url",createNewItem);
  
    return await axios.post(createNewItem,data);
}


export async function ClearAllCart() {  
    return await axios.post(clearCart);
}
