const UUID = require('uuid');

const Cartdata = new Map();

const createCart = (newdata) =>{
    const Cart = {id:UUID.v4() , newdata , createdAT : new Date() };
    Cartdata.set(Cart.id, Cart);
    return Cart;
};

const getAllCarts = () =>{
    return [...Cartdata.values()];
}

const getCartByID = (ID) => {
    const data = Cartdata.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"cart ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success"});
}


const updateCart = (newdata , ID) =>{
    const Cart = {id:ID , newdata , createdAT : new Date() };
    Cartdata.set(ID, Cart);
    return  result=({ Cart , msg:"update success"});
};


const clearCart = () =>{
    const Cart  = Cartdata.clear();
    return  result=({ Cart , msg:"clear success"});
};



module.exports = {createCart , getAllCarts , getCartByID , updateCart , clearCart};