import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { getallItems } from '../services/itemServices';
import moment from 'moment';

export default function ItemList() {

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

  return (
    <div>
      <h1>Trader Home</h1>
      <br/>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="loggedUser">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">
                   <a className="nav-link active" aria-current="page" href="/ItemList">Inventory</a>
                   <a className="nav-link active" href="/CustomerList" aria-current="page">customers</a>
                   <a className="nav-link active" href="/promotionList" aria-current="page">Promotions</a>                  
                 </div>
                </div>
             </div>
             <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{float:"right"}}>
                      Logout
                  </button>
          </nav>
        <br/>
            <div>
                <a href='/addItem' className='btn btn-success' style={{float:"left"}}>Add New Item to Inventory</a>
            </div>
            <br/>
            <div>
                <h3>Item List</h3>
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
                               <a href={`/EditItem/${itemList?.id}`} className='btn btn-warning' style={{float:"left"}}>Edit</a>
                           </td>
                   </tr>  
                ))}
                </tbody>
                </table>
            </div>


    </div>
  )
}
