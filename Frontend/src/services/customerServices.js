import axios from 'axios';


let createUser = "http://localhost:5000/" + "customer/create";
let cusLogin = "http://localhost:5000/" + "customer/LoginCustomer";
let cusList = "http://localhost:5000/" + "customer/getAll";

export async function CreateCustomer(data) {
    const alldata = {
        name:data.name,
        email:data.email,
        password:data.password,
        age:data.age
    };

    console.log("url",createUser);
  
    return await axios.post(createUser,alldata);
}


export async function CustomerLoginFunc(data) {
    const alldata = {
        email:data.email,
        password:data.password,
    };

    console.log("data",alldata);
  
    return await axios.post(cusLogin,alldata);
}

export async function getallCustomers() { 
    return await axios.get(cusList);
}