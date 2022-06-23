const Router = require('koa-router');
const {createTrader , getTraderByID , getAllTraders} = require("../Controllers/Trader");

const router = new Router({
    prefix: '/trader'
   });

   router.post('/createTrader',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createTrader(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

   router.get('/getTraderByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getTraderByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    router.get('/getAllTraders', ctx => {
        let result =  getAllTraders();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

    router.post('/LoginTrader', ctx => {
        let data = ctx.request.body;
        //console.log("Login data",data);
        let user;
        let result =  getAllTraders();
        //console.log(result);
        result.forEach(function(item) {
           // console.log("data",item.cusdata.email);
            if(item.traderdata.email === data.email)
            {
                if(item.traderdata.password === data.password){
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