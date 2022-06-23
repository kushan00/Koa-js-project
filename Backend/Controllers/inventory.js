const UUID = require('uuid');

const InventoryData = new Map();

const createInventory = (newdata) =>{
    const inventory = {id:UUID.v4() , newdata , createdAT : new Date() };
    InventoryData.set(inventory.id, inventory);
    return inventory;
};

const getAllInventory = () =>{
    return [...InventoryData.values()];
}

const getInventoryByID = (ID) => {
    const data = InventoryData.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"Inventory ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success"});
}



module.exports = {createInventory , getInventoryByID , getAllInventory};