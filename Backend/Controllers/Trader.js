const UUID = require('uuid');

const data = new Map();

const createTrader = (traderdata) =>{
    const trader = {id:UUID.v4() , traderdata , userRole:"trader" ,createdAT : new Date() };
    data.set(trader.id, trader);
    return trader;
};

const getAllTraders = () =>{
    return [...data.values()];
}

const getTraderByID = (ID) => {
    const traderdata = data.get(ID);
    if(!traderdata)
    {
        return result=({ status:0 , msg:"trader ID" + ID + "not exists"});
    } 

    return result=({ traderdata , msg:"success"});
}



module.exports = {createTrader , getTraderByID , getAllTraders};