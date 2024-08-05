import axios from "axios";
import { useState ,useEffect } from "react";
import Table from 'react-bootstrap/Table';


const Display=()=>{
   const [myData,setMyData]=useState([]);

   const getData=()=>{
    let API='http://localhost:8080/students/studata';
    axios.get(API).then((res)=>{
        setMyData(res.data);
    })
   }

   useEffect(()=>{
    getData();
   },[])

   const studentData=myData.map((key)=>{
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
        <h1 align="center">Student Records</h1>
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
        {studentData}
      </tbody>
      </Table>

        </>
    )
}
export default Display;