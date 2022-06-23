const Router = require('koa-router');
const {createPurchase , getPurchaseByID , getAllPurchases}= require("../Controllers/purchase");

const PurcahseRouter = new Router({
    prefix: '/purchase'
   });

   PurcahseRouter.post('/createPurchase',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createPurchase(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

   PurcahseRouter.get('/getPurchaseByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getPurchaseByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    PurcahseRouter.get('/getAllPurchases', ctx => {
        let result =  getAllPurchases();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });
   

module.exports =  PurcahseRouter;