import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { getallItems } from '../services/itemServices';
import { CreateCart } from '../services/cartServices';
import { CreateWishList } from '../services/wishlistServices';
import moment from 'moment';

export default function CustomerHome() {

     const navigate = useNavigate();

     const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.removeItem("userRole");
      navigate('/')
      }

      const [Inventories, setInventories] = useState([]);
 
      const getAllItemList = async () => {
          let data = await getallItems();
          console.log("cus data",data);
          setInventories(data.data.data);
      }
  
      useEffect(() => {
          getAllItemList();
      }, [])


      const addtoCart = async(data) =>{
        console.log("cart data",data);
        let resdata = await CreateCart(data);
        console.log("return cart ", resdata)
        alert("add to cart successfull");
      }

      const addtoWishList = async(data)=>{
        console.log("wish list data",data);
        let resdata = await CreateWishList(data);
        console.log("return wish list",resdata);
        alert("Item added to wish list successfully!")
      }

  return (
    <div>
      <h1>Customer Home</h1>
      <br/>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="/loggedUser">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">
                   <a className="nav-link active" href="/wishList" aria-current="page">Wish List</a>
                   <a className="nav-link active" href="/cartList" aria-current="page">Cart </a>
                   <a className="nav-link active" href="/purchaseList" aria-current="page">Purchase</a>                  
                 </div>
                </div>
             </div>
             <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{float:"right"}}>
                      Logout
                  </button>
          </nav>
          <br/>
                <div>
                    <h2 style={{color:"green"}}><u>Welcome to Home</u></h2>
                </div>
          <br/>
          <div>
          <div>
                <h3 style={{color:"blue"}}>Add Items To  Your Cart</h3>
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
                            <th scope="col">Action</th>

                          </tr>
                    </thead>
               <tbody>
                {Inventories?.map((itemList,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{itemList?.newdata.ItemName}</td>
                           <td>{itemList?.newdata.brandName}</td>
                           <td>{itemList?.newdata.model}</td>
                           <td>{itemList?.newdata.price}</td>
                           <td>{moment(itemList?.createdAT).format(" YYYY-MM-DD ")}</td>
                           <td>
                                <button onClick={() => addtoCart(itemList?.newdata)} 
                                className="btn btn-sm btn-warning" 
                                type="submit" 
                                style={{float:"right"}}>
                                    Add to cart
                                </button>
                                <br/>
                                <br/>
                                <button onClick={() => addtoWishList(itemList?.newdata)} 
                                className="btn btn-sm btn-success" 
                                type="submit" 
                                style={{float:"right"}}>
                                    Add to Wish List
                                </button>
                           </td>
                   </tr>  
                ))}
                </tbody>
                </table>
            </div>
          </div>
    </div>
  )
}
