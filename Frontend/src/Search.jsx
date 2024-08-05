import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

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

        Enter Roll Number :- <input type="text" name="" id="" value={rollno} onChange={(e)=>{setrollno(e.target.value)}} /> <br />
        <button onClick={handlesearch}>Search</button>

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