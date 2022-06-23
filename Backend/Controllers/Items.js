const UUID = require('uuid');

const Itemdata = new Map();

const createItems = (newdata) =>{
    const Item = {id:UUID.v4() , newdata , createdAT : new Date() };
    Itemdata.set(Item.id, Item);
    return Item;
};

const getAllItems = () =>{
    return [...Itemdata.values()];
}

const getItemByID = (ID) => {
    const data = Itemdata.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"customer ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success"});
}


const updateItem = (newdata , ID) =>{
    const Item = {id:ID , newdata , createdAT : new Date() };
    Itemdata.set(ID, Item);
    return  result=({ Item , msg:"update success"});
};



module.exports = {createItems , getItemByID , getAllItems , updateItem};