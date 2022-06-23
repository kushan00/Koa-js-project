const Router = require('koa-router');
const {createInventory , getInventoryByID , getAllInventory} = require("../Controllers/inventory");

const InventoryRouter = new Router({
    prefix: '/Inventory'
   });

   InventoryRouter.post('/createInventory',ctx => {
       const data = ctx.request.body;
       console.log(data);
       let result =  createInventory(data);
       console.log(result);
       ctx.response.status =  200;
       ctx.body = {data:result , message:"success"};
    });

   InventoryRouter.get('/getInventoryByID/:id', ctx => {
        const data = ctx.params.id;
        let result =  getInventoryByID(data);
        ctx.response.status =  200;
        ctx.body = {data:result , message:result.msg};
    });
   
    InventoryRouter.get('/getAllInventory', ctx => {
        let result =  getAllInventory();
        ctx.response.status =  200;
        ctx.body = {data:result};
    });

     

module.exports =  InventoryRouter;