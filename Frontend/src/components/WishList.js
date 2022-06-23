import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { getallWishList } from '../services/wishlistServices';
import moment from 'moment';

export default function WishList() {

     const navigate = useNavigate();

     const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.removeItem("userRole");
      navigate('/')
      }

      const [WIshListData, setWishList] = useState([]);
 
      const getAllWishList = async () => {
          let data = await getallWishList();
          console.log("wish list data",data);
          setWishList(data.data.data);
      }
  
      useEffect(() => {
          getAllWishList();
      }, [])


  return (
    <div>
      <h1>Customer Home</h1>
      <br/>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="loggedUser">Home</a>
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
          <br/>
          <div>
          <div>
                <h3 style={{color:"blue"}}>My Wish List </h3>
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
                {WIshListData?.map((itemList,index)=>(
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
            </div>
          </div>
    </div>
  )
}
