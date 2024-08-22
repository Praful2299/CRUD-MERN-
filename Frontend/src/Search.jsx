import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search=()=>{
    const[rollno,setrollno]=useState("");
    const[searchData,setSearchData]=useState([]);

    const handlesearch=()=>{
        let api="http://localhost:8080/students/stusearch";
        axios.post(api,{rollno:rollno}).then((res)=>{
            setSearchData(res.data);
            console.log(searchData);
        })
    }

    const myData=searchData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1 align="center"  >Search Page</h1>
      <div className="searchdata">
         <h5>Enter Roll Number :-</h5>
        <Form className="d-flex" style={{marginLeft:"15px"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={rollno} onChange={(e)=>{setrollno(e.target.value)}}
            />
            <Button variant="outline-success" onClick={handlesearch}>Search</Button>
          </Form>
          </div>
        <hr />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll Numbr</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {myData}
      </tbody>
      </Table>
           
    
        </>
    )
}
export default Search;