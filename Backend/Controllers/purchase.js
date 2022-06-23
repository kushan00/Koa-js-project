const UUID = require('uuid');

const purchaseData = new Map();

const createPurchase = (cusdata) =>{
    const purchase = {id:UUID.v4() , cusdata , createdAT : new Date() };
    purchaseData.set(purchase.id, purchase);
    return purchase;
};

const getAllPurchases = () =>{
    return [...purchaseData.values()];
}

const getPurchaseByID = (ID) => {
    const cusdata = purchaseData.get(ID);
    if(!cusdata)
    {
        return result=({ status:0 , msg:"purchase ID" + ID + "not exists"});
    } 

    return result=({ cusdata , msg:"success"});
}



module.exports = {createPurchase , getPurchaseByID , getAllPurchases};