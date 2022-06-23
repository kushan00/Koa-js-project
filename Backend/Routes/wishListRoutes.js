const Router = require('koa-router');
const {createWishList , getWishListByID , getAllWishLists} = require("../Controllers/wishList");

const WishListRouter = new Router({
    prefix: '/WishList'
   });

   WishListRouter.post('/createWishList',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createWishList(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

   WishListRouter.get('/getWishListByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getWishListByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    WishListRouter.get('/getAllWishLists', ctx => {
        let result =  getAllWishLists();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

     

module.exports =  WishListRouter;