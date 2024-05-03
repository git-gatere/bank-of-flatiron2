import React from "react";
import Table from 'react-bootstrap/Table';

function Form ({ transactions }) {
    return (
    <Table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2019-12-06</td>
                <td>Paycheck from Bob's Burgers</td>
                <td>Income</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>2019-12-01</td>
                <td>Chipotle</td>
                <td>Food</td>
                <td>750</td>
            </tr>
            <tr>
                <td>2019-04-03</td>
                <td>Sunglasses</td>
                <td>Fashion</td>
                <td>5000</td>
            </tr>
            {transactions.map((transaction, index) => (
                <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                </tr>
            ))}
        </tbody>
    </Table>
    );
}

export default Form;
