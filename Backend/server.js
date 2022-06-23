const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');
const PORT =  5000;

const app = new Koa();
app.use(cors());
 
//import routes
const CustomerRoutes = require('./Routes/customerRoutes');
const ItemRoutes = require('./Routes/itemRoutes');
const TraderRoutes = require('./Routes/TraderRoutes');
const Cartrouter = require('./Routes/cartRoutes');
const Promotionrouter = require('./Routes/promotionRoutes');
const WishListRouter = require('./Routes/wishListRoutes');
const InventoryRouter = require('./Routes/inventoryRoutes');
const PurcahseRouter = require('./Routes/purchaseRoutes');

app.use(bodyparser()); 

//use Routes
app.use(CustomerRoutes.routes());
app.use(CustomerRoutes.allowedMethods());

app.use(ItemRoutes.routes());
app.use(ItemRoutes.allowedMethods());

app.use(TraderRoutes.routes());
app.use(TraderRoutes.allowedMethods());

app.use(Cartrouter.routes());
app.use(Cartrouter.allowedMethods());

app.use(Promotionrouter.routes());
app.use(Promotionrouter.allowedMethods());
 
app.use(WishListRouter.routes());
app.use(WishListRouter.allowedMethods());

app.use(InventoryRouter.routes());
app.use(InventoryRouter.allowedMethods());

app.use(PurcahseRouter.routes());
app.use(PurcahseRouter.allowedMethods());



app.use(ctx => {
 ctx.body = 'Koa server is running';
});

app.listen(PORT);


console.log(`Application is running on port ${PORT}`);