const Router = require('koa-router');
const {createCustomer , getCustomerByID , getAll} = require("../Controllers/customer");

const router = new Router({
    prefix: '/customer'
   });

   router.post('/create',ctx => {
       const data = ctx.request.body;
       //console.log(data);
       let result =  createCustomer(data);
       //console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });
    
   router.get('/getByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getCustomerByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
    
    router.get('/getAll', ctx => {
        let result =  getAll();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

    router.post('/LoginCustomer', ctx => {
        let data = ctx.request.body;
        console.log("Login data",data);
        let user;
        let result =  getAll();
        console.log(result);
        result.forEach(function(item) {
           console.log("data",item.cusdata.email);
            if(item.cusdata.email === data.email)
            {
                if(item.cusdata.password === data.password){
                    user = item;
                }
            }
        });
        console.log(user);
        if(user)
        {
            ctx.response.status =  200;
            ctx.body = {data:user , msg:"login success"};
        }
        else
        {
            ctx.response.status =  404;
            ctx.body = {data:user , msg:"login failed"};
        }
    });

    
   

module.exports =  router;