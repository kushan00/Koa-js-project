const Router = require('koa-router');
const {createItems , getItemByID , getAllItems , updateItem} = require("../Controllers/Items");

const Itemrouter = new Router({
    prefix: '/Items'
   });

   Itemrouter.post('/createItem',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createItems(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

   Itemrouter.get('/getItemByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getItemByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    Itemrouter.get('/getAllItems', ctx => {
        let result =  getAllItems();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

    Itemrouter.post('/updateItemByID/:id', ctx => {
        const id = ctx.params.id;
        const data =  ctx.request.body;
        let result =  updateItem(data,id);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
     

module.exports =  Itemrouter;