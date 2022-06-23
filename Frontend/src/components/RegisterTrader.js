import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {CreateTrader} from '../services/traderServices';

const RegisterTrader = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  
   
  

  const handleName = (e) => {
    setName(e.target.value);
  };
  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  
  const handleAge = (e) => {
    setAge(e.target.value);
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
        alert("Fill all the data")
    } else {
        let newdata = {
            name:name,
            email:email,
            password:password,
            age:age
        }
        let cusdata =  await CreateTrader(newdata);
        console.log("trader return data",cusdata);
        navigate('/traderLogin')
    }
  };
 


  return (
    <div >
        <center>
            <h1>Register Trader</h1>
        <form>
            <label className="label">Name</label>
            <input onChange={handleName} className="input"
            value={name} type="text" /><br/><br/>
    
            <label className="label">Email</label>
            <input onChange={handleEmail} className="input"
            value={email} type="email" /><br/><br/>
    
            <label className="label">Password</label>
            <input onChange={handlePassword} className="input"
            value={password} type="password" /><br/><br/>

            <label className="label">Age</label>
            <input onChange={handleAge} className="input"
            value={age} type="text" /><br/><br/>
    
            <button onClick={handleSubmit} className="btn btn-primary" type="submit">
            Submit
            </button>
      </form>         
      </center>
    </div>
  )
};

export default RegisterTrader;
