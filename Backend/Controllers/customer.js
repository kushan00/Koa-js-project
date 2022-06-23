const UUID = require('uuid');

const data = new Map();

const createCustomer = (cusdata) =>{
    const customer = {id:UUID.v4() , cusdata ,userRole:"customer", createdAT : new Date() };
    data.set(customer.id, customer);
    return customer;
};

const getAll = () =>{
    return [...data.values()];
}

const getCustomerByID = (ID) => {
    const cusdata = data.get(ID);
    if(!cusdata)
    {
        return result=({ status:0 , msg:"customer ID" + ID + "not exists"});
    } 

    return result=({ cusdata , msg:"success"});
}



module.exports = {createCustomer , getCustomerByID , getAll};