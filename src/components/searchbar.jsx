import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar({value, onChange}) {
    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Search your recent transactions"
                aria-label="Search your recent transactions"
                aria-describedby="basic-addon2"
                type="text"
               value={value}
              onChange={(e) => onChange(e.target.value)}
            />
        </InputGroup>
    );
}

export default SearchBar;
