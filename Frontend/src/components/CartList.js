import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { getallcarts , ClearAllCart } from '../services/cartServices';
import { CreatePurchase } from '../services/purchaseService';
import moment from 'moment';

export default function CartList() {

     const navigate = useNavigate();

     const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.removeItem("userRole");
      navigate('/')
      }

      const [cart, setCart] = useState([]);
 
      const getAllcartList = async () => {
          let data = await getallcarts();
          console.log("cus data",data);
          setCart(data.data.data);
      }
  
      useEffect(() => {
          getAllcartList();
      }, [])


      const addtopurchase = async(data)=>{
        console.log("data",data);
        let array = [];
        let total = 0;
        data.map((item)=>{
          array.push(item.newdata);
          total =  total +  parseInt(item.newdata.price);
        });
        console.log(total);
        alert(`Your total bill is ${total}`);
        let resdata = await CreatePurchase(array,total);
        console.log("data",resdata);
        ClearAllCart();
        alert("purchase successfull ! Your cart cleared...");
        navigate("/loggedUser");
      }



  return (
    <div>
      <h1>Customer Home</h1>
      <br/>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                   <a class="navbar-brand" href="loggedUser">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
               <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div class="navbar-nav">
                   <a class="nav-link active" href="/wishList" aria-current="page">Wish List</a>
                   <a class="nav-link active" href="/cartList" aria-current="page">Cart </a>
                   <a class="nav-link active" href="/purchaseList" aria-current="page">Purchase</a>                  
                 </div>
                </div>
             </div>
             <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{float:"right"}}>
                      Logout
                  </button>
          </nav>
          <br/>
          <br/>
          <div>
          <div>
                <h3 style={{color:"blue"}}>My Cart </h3>
                <br/>
                <table className="table  table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item name</th>
                            <th scope="col">Brand name</th>
                            <th scope="col">Model</th>
                            <th scope="col">price</th>
                            <th scope="col">created At</th>
                          </tr>
                    </thead>
               <tbody>
                {cart?.map((itemList,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{itemList?.newdata.ItemName}</td>
                           <td>{itemList?.newdata.brandName}</td>
                           <td>{itemList?.newdata.model}</td>
                           <td>{itemList?.newdata.price}</td>
                           <td>{moment(itemList?.createdAT).format(" YYYY-MM-DD ")}</td>
                   </tr>  
                ))}
                </tbody>
                </table>
                <div style={{float:"left"}}>
                <button onClick={()=> addtopurchase(cart)} className="btn btn-lg btn-primary" type="submit" style={{float:"right"}}>
                      Purchase Items
                  </button>
                </div>
            </div>
          </div>
    </div>
  )
}
