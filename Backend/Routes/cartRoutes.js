const Router = require('koa-router');
const {createCart , getAllCarts , getCartByID , updateCart , clearCart} = require("../Controllers/cart");

const Cartrouter = new Router({
    prefix: '/cart'
   });

   Cartrouter.post('/createCart',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createCart(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

   Cartrouter.get('/getCartByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getCartByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    Cartrouter.get('/getAllCarts', ctx => {
        let result =  getAllCarts();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

    Cartrouter.post('/updateCartByID/:id', ctx => {
        const id = ctx.params.id;
        const data =  ctx.request.body;
        let result =  updateCart(data,id);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
     
    Cartrouter.post('/clearCarts', ctx => {
        let result =  clearCart();
        console.log(result);
        ctx.response.status =  200;
        ctx.body = {data:result, msg:"cart clear success"};
    });
 


module.exports =  Cartrouter;