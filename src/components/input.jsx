import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from "./form";

function Input () {
   
   const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = { date, description, category, amount};

    setTransactions([...transactions,newTransaction])
    setDate ('')
    setDescription ('')
    setCategory ('')
    setAmount ('')
   }
   const[transactions, setTransactions]=useState([])
   const [date,setDate]=useState('');
   const [description,setDescription]=useState('');
   const [category,setCategory]=useState('');
   const [amount,setAmount]=useState('');

   return (<>
    <form className="frm" onSubmit={handleSubmit}>
    <label>Date</label>  <input className="input" type="date" value={date} onChange={(e) => {setDate}}></input>
    <input className="input" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
    <input className="input" type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}></input>
    <input className="input" type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
    </form>
    <br/>
    
    <Button variant="secondary" className="btn">Add Transaction</Button>{' '}
    </>)
}

export default Input;