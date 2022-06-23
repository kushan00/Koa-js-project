const UUID = require('uuid');

const wishListData = new Map();

const createWishList = (newdata) =>{
    const WIshList = {id:UUID.v4() , newdata , createdAT : new Date() };
    wishListData.set(WIshList.id, WIshList);
    return WIshList;
};

const getAllWishLists = () =>{
    return [...wishListData.values()];
}

const getWishListByID = (ID) => {
    const data = wishListData.get(ID);
    if(!data)
    {
        return result=({ status:0 , msg:"Promotion ID" + ID + "not exists"});
    } 

    return result=({ data , msg:"success"});
}



module.exports = {createWishList , getWishListByID , getAllWishLists};