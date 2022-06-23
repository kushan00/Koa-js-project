import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { CreatePromotion } from '../services/promotionServices';

export default function AddPromotion() {

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("userRole");
    navigate('/')
    }
  
    
  const [PromotionName, setPromotionName] = useState('');
  const [discount, setdiscount] = useState('');
  const [dueTo, setdueTo] = useState('');
  const [month, setmonth] = useState('');

 
 

  const handlePromotionName = (e) => {
    setPromotionName(e.target.value);
  };
 

  const handlediscount = (e) => {
    setdiscount(e.target.value);
  };
 

  const handledueTo = (e) => {
    setdueTo(e.target.value);
  };


 const handlemonth = (e) => {
    setmonth(e.target.value);
 };
 
 const handleAddNewPromotion = async (e) => {
    e.preventDefault();
    if (PromotionName === '' || discount === '' || dueTo === '' || month === '') {
        alert("Insert All the data")
    } else {
        let newdata = {
            PromotionName:PromotionName,
            discount:discount,
            dueTo:dueTo,
            month:month
        }
        let data =  await CreatePromotion(newdata);
        console.log("promotion return data",data);
        navigate('/promotionList')
    }
  };


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
                <center>
                    <h1>Add New Promotion</h1>
                    <form>
                        <label className="label">Promotion Name</label>
                        <input onChange={handlePromotionName} className="input"
                        value={PromotionName} type="text" /><br/><br/>
                
                        <label className="label">Discount</label>
                        <input onChange={handlediscount} className="input"
                        value={discount} type="email" /><br/><br/>
                
                        <label className="label">Due To</label>
                        <input onChange={handledueTo} className="input"
                        value={dueTo} type="text" /><br/><br/>

                        <label className="label">Month</label>
                        <input onChange={handlemonth} className="input"
                        value={month} type="text" /><br/><br/>
                
                        <button onClick={handleAddNewPromotion} className="btn btn-primary" type="submit">
                        Insert
                        </button>
                    </form>         
                </center>
            </div>


    </div>
  )
}
