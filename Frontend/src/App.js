import React , {useEffect , useState} from 'react'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import RegisterCustomer from './components/RegisterCustomer';
import RegisterTrader from './components/RegisterTrader';
import CustomerHome from './components/CustomerHome';
import TraderHome from './components/TraderHome';
import Landing from './components/Landing';
import SelectPage from './components/SelectPage';
import LoginSelect from './components/LoginSelect';
import CustomerLogin from './components/CustomerLogin';
import TraderLogin from './components/TraderLogin';

// Trader Pages import
import CustomerList from './components/CustomerList';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import PromotionList from './components/PromotionList';
import AddPromotion from './components/AddPromotion';
import EditItem from './components/EditItem';

// Customer pages import
import CartList from './components/CartList';
import WishList from './components/WishList';
import PurchaseList from './components/PurchaseList';


export default function App() {

	const [user, setUser] = useState("")

 useEffect(() => {
	setUser(localStorage.getItem("userRole"));
 }, [])

//user == "customer" 

  return (
			<div className="App">
				<Router>
					<Routes>
						<Route exact path="/" element={<Landing/>}/>							
            			<Route exact path="/loggedUser" element={true ? <CustomerHome/> : <TraderHome/>}/>							
						<Route  path="/register" element={<SelectPage/>} />	
						<Route  path="/login" element={<LoginSelect/>} />	
						<Route  path="/customerRegister" element={<RegisterCustomer/>} />	
						<Route  path="/traderRegister" element={<RegisterTrader/>} />	
						<Route  path="/customerLogin" element={<CustomerLogin/>} />	
						<Route  path="/traderLogin" element={<TraderLogin/>} />	

						{/* Trader Routes */}
						<Route  path="/CustomerList" element={<CustomerList/>} />	
						<Route path="/ItemList" element={<ItemList/>}/>
						<Route path="/addItem" element={<AddItem/>}/>
						<Route path="/promotionList" element={<PromotionList/>}/>
						<Route path="/addPromotion" element={<AddPromotion/>}/>
						<Route path="/EditItem/:id" element={<EditItem/>}/>
						
						
						{/* Customer Routes */}
						<Route path="/cartList" element={<CartList/>}/>
						<Route path="/wishList" element={<WishList/>}/>
						<Route path="/purchaseList" element={<PurchaseList/>}/>
						

					</Routes>
				</Router>
			</div>
  );
}
