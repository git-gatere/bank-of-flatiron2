import React, { useState } from "react";
import Title from "./components/title";
import SearchBar from "./components/searchbar";
import Input from "./components/input";
import Form from "./components/form";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Title />
      <SearchBar searchTerm={[]} setSearchTerm={[]} />
      <Input />
      <Form transactions={[]} />
    </>
  );
}

export default App;





