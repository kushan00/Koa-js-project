import React from 'react'
import {  useNavigate } from "react-router-dom";

export default function TraderHome() {

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("userRole");
    navigate('/')
    }
  
 

  return (
    <div>
      <h1>Trader Home</h1>
      <br/>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                   <a class="navbar-brand" href="loggedUser">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
               <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div class="navbar-nav">
                   <a class="nav-link active" aria-current="page" href="/ItemList">Inventory</a>
                   <a class="nav-link active" href="/CustomerList" aria-current="page">customers</a>
                   <a class="nav-link active" href="/promotionList" aria-current="page">Promotions</a>                  
                 </div>
                </div>
             </div>
             <button onClick={handleSubmit} className="btn btn-primary" type="submit" style={{float:"right"}}>
                      Logout
                  </button>
          </nav>
          <br/>
                <div>
                    <h2 style={{color:"green"}}><u>Welcome to Trader Home</u></h2>
                </div>
          <br/>
          <div>
            <table>
              <tr>
                <td>
                    <div>
                          <a href='/ItemList' 
                          className='btn btn-warning' 
                          style={{float:"left"}}>
                            Item List</a>
                    </div>
                </td>
                &nbsp;
                &nbsp;
                &nbsp;
                <td>
                    <div>
                          <a href='/promotionList' 
                          className='btn btn-primary' 
                          style={{float:"left"}}>
                            Promotion List</a>
                    </div>
                </td>
                &nbsp;
                &nbsp;
                &nbsp;
                <td>
                <div>
                      <a href='/CustomerList' 
                      className='btn btn-danger' 
                      style={{float:"left"}}>
                        Customer List</a>
                </div>
                </td>
                &nbsp;
                &nbsp;
                &nbsp;
                <td>
                <div>
                      <a href='/addItem' 
                      className='btn btn-success' 
                      style={{float:"left"}}>
                        Add Item</a>
                </div>
                </td>
              </tr>
              <br/>
            </table>
          </div>
    </div>
  )
}
