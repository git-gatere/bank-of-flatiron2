import React, { useState } from "react";
import Title from "./components/title"
import SearchBar from "./components/searchbar";
import Input from "./components/input";
import Form from "./components/form";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);

  return (
    <>
      <Title />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Input transactions={transactions} setTransactions={setTransactions} />
      <Form transactions={transactions} />
    </>
  );
}

export default App;
