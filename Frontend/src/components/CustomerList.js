import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { getallCustomers } from '../services/customerServices';
import moment from 'moment';

export default function CustomerList() {

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("userRole");
    navigate('/')
    }
  
    const [cusList, setcusList] = useState([]);
 
    const GetCusList = async () => {
        let data = await getallCustomers();
        console.log("cus data",data);
        setcusList(data.data.data);
    }

    useEffect(() => {
        GetCusList();
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
                <h3>Customer List</h3>
                <table className="table  table-striped table-bordered">
                <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">created At</th>

                          </tr>
                    </thead>
               <tbody>
                {cusList?.map((cusdata,index)=>(
                       <tr>
                       <th scope="row">{index+1}</th>
                           <td>{cusdata?.cusdata.name}</td>
                           <td>{cusdata?.cusdata.email}</td>
                           <td>{cusdata?.cusdata.age}</td>
                           <td>{moment(cusdata?.createdAT).format(" YYYY-MM-DD ")}</td>
                   </tr>  
                ))}
                </tbody>
                </table>
            </div>


    </div>
  )
}
