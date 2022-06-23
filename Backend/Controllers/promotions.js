const UUID = require('uuid');

const promotionData = new Map();

const createPromotion = (newdata) =>{
    const Promotion = {id:UUID.v4() , newdata , createdAT : new Date() };
    promotionData.set(Promotion.id, Promotion);
    return Promotion;
};

const getAllPropmotions = () =>{
    return [...promotionData.values()];
}

const getPromotionByID = (ID) => {
    const data = promotionData.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"Promotion ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success"});
}



module.exports = {createPromotion , getPromotionByID , getAllPropmotions};