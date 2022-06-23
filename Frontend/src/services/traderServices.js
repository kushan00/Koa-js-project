import axios from 'axios';

let TraderLogin = "http://localhost:5000/" + "trader/LoginTrader";
let createTrader = "http://localhost:5000/" + "trader/createTrader";

export async function CreateTrader(data) {
    const alldata = {
        name:data.name,
        email:data.email,
        password:data.password,
        age:data.age
    };

    console.log("data",alldata);
  
    return await axios.post(createTrader,alldata);
}


export async function TraderLoginFunc(data) {
    const alldata = {
        email:data.email,
        password:data.password,
    };

    console.log("data",alldata);
  
    return await axios.post(TraderLogin,alldata);
}