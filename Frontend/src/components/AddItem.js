import React , {useState , useEffect}  from 'react'
import {  useNavigate } from "react-router-dom";
import { CreateItem } from '../services/itemServices';

export default function AddItem() {

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("userRole");
    navigate('/')
    }
  
    
  const [ItemName, setItemName] = useState('');
  const [brandName, setbrandName] = useState('');
  const [model, setmodel] = useState('');
  const [price, setprice] = useState('');

 
 

  const handleItemName = (e) => {
    setItemName(e.target.value);
  };

  const handlebrandName = (e) => {
    setbrandName(e.target.value);
  };
 

  const handlemodel = (e) => {
    setmodel(e.target.value);
  };


 const handleprice = (e) => {
    setprice(e.target.value);
 };
 
 const handleAddNewItem = async (e) => {
    e.preventDefault();
    if (ItemName === '' || brandName === '' || model === '' || price === '') {
        alert("Insert All the data")
    } else {
        let newdata = {
            ItemName:ItemName,
            brandName:brandName,
            model:model,
            price:price
        }
        let data =  await CreateItem(newdata);
        console.log("Item return data",data);
        navigate('/ItemList')
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
                    <h1>Add New Item</h1>
                    <form>
                        <label className="label">Item Name</label>
                        <input onChange={handleItemName} className="input"
                        value={ItemName} type="text" /><br/><br/>
                
                        <label className="label">Brand Name</label>
                        <input onChange={handlebrandName} className="input"
                        value={brandName} type="email" /><br/><br/>
                
                        <label className="label">Model</label>
                        <input onChange={handlemodel} className="input"
                        value={model} type="text" /><br/><br/>

                        <label className="label">Price</label>
                        <input onChange={handleprice} className="input"
                        value={price} type="text" /><br/><br/>
                
                        <button onClick={handleAddNewItem} className="btn btn-primary" type="submit">
                        ADD
                        </button>
                    </form>         
                </center>
            </div>


    </div>
  )
}
