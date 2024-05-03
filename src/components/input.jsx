import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function Input ({ transactions, setTransactions }) {
   const [date, setDate] = useState('');
   const [description, setDescription] = useState('');
   const [category, setCategory] = useState('');
   const [amount, setAmount] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = { date, description, category, amount};

    setTransactions([...transactions, newTransaction]);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
   }

   return (
    <>
      <form className="frm" onSubmit={handleSubmit}>
        <label>Date</label>
        <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
        <input className="input" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <input className="input" type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}></input>
        <input className="input" type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
        <br/>
        <Button variant="secondary" className="btn" type="submit">Add Transaction</Button>
      </form>
    </>
  );
}

export default Input;
