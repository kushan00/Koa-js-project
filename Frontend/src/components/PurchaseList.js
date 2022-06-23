import React , {useState , useEffect}  from 'react'
import moment from "moment";
import {  useNavigate } from "react-router-dom";
import { getallPurchases } from '../services/purchaseService';


export default function PurchaseList() {

     const navigate = useNavigate();

     const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.removeItem("userRole");
      navigate('/')
      }

      const [purchaseData, setPurchaseList] = useState([]);
      const [createdAT, setcreatedAT] = useState([]);
 
      const getAllPurchaseList = async () => {
          let data = await getallPurchases();
          console.log("purcahse data",data);
          setPurchaseList(data.data.data);
          setcreatedAT(data.data.data[0].createdAT);
      }
  
      useEffect(() => {
          getAllPurchaseList();
      }, [])



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
          <br/>
          <div>
          <div>
                <h3 style={{color:"blue"}}>Purchased Items History</h3>
                <br/>
                {purchaseData?.map((data,x)=>(
                    <div>
                        <h4>{`Purchase Date : ${moment(data.createdAT).format(" YYYY-MM-DD ")}`}</h4>
                        <h5>{` Total : ${data?.cusdata?.total}`}</h5>
                          <table className="table  table-striped table-bordered">                        
                            <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item name</th>
                                    <th scope="col">Brand name</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">price</th>
                                    <th scope="col">Purchase Date</th>
                                  </tr>
                            </thead>
                            <tbody>
                              {data?.cusdata?.data.map((itemList,index)=>(
                                    <tr>
                                    <th scope="row">{index+1}</th>
                                        <td>{itemList?.ItemName}</td>
                                        <td>{itemList?.brandName}</td>
                                        <td>{itemList?.model}</td>
                                        <td>{itemList?.price}</td>
                                        <td>{moment(createdAT).format(" YYYY-MM-DD ")}</td>
                                </tr>  
                              ))}
                              </tbody>
                          </table>
                        <br/><br/>
                  </div>
                ))}
                
            </div>
          </div>
    </div>
  )
}
