const Router = require('koa-router');
const {createPromotion , getPromotionByID , getAllPropmotions} = require("../Controllers/promotions");

const Promotionrouter = new Router({
    prefix: '/Promotion'
   });
 
   Promotionrouter.post('/createPromotion',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createPromotion(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

   Promotionrouter.get('/getPromotionByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getPromotionByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    Promotionrouter.get('/getAllPromotions', ctx => {
        let result =  getAllPropmotions();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

     

module.exports =  Promotionrouter;