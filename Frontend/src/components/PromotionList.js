import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { getAllPromotions } from '../services/promotionServices';
import moment from 'moment';

export default function PromotionList() {

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("userRole");
    navigate('/')
    }
  
    const [Promotions, setPromotions] = useState([]);
 
    const getAllPromotionList = async () => {
        let data = await getAllPromotions();
        console.log("promotion data",data);
        setPromotions(data.data.data);
    }

    useEffect(() => {
        getAllPromotionList();
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
                <a href='/addPromotion' className='btn btn-success' style={{float:"left"}}>Add New Promotion</a>
            </div>
            <br/>
            <div>
                <h3>Promotion List</h3>
                <table className="table  table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Promotion name</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Due To</th>
                            <th scope="col">Month</th>
                            <th scope="col">created At</th>

                          </tr>
                    </thead>
               <tbody>
                {Promotions?.map((itemList,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{itemList?.newdata.PromotionName}</td>
                           <td>{itemList?.newdata.discount}</td>
                           <td>{itemList?.newdata.dueTo}</td>
                           <td>{itemList?.newdata.month}</td>
                           <td>{moment(itemList?.createdAT).format(" YYYY-MM-DD ")}</td>
                   </tr>  
                ))}
                </tbody>
                </table>
            </div>


    </div>
  )
}
