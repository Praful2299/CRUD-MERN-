import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditData=()=>{
    const {id}= useParams();
    const [mydata, setMydata]=useState({});
    const navigate=useNavigate();

const loadData=()=>{
    let api="http://localhost:8080/students/editdisplay";
    axios.post(api, {id:id}).then((res)=>{
       setMydata(res.data);
    })
  }

  useEffect(()=>{
    loadData();
  }, [])

  const handleInput=(e)=>{
    let name= e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values, [name]:value}));
    console.log(mydata);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
   let api="http://localhost:8080/students/editsave";
   axios.post(api, mydata).then((res)=>{
     navigate("/update");
   })
  }

    return(
        <>
         <h1 style={{textAlign:"center"}}> Edit Data</h1>
       <Form style={{width:"60%" , margin:"auto"}}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Roll No.</Form.Label>
        <Form.Control type="text"  value={mydata.rollno} name="rollno" onChange={handleInput} autoFocus />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Name</Form.Label>
        <Form.Control type="text"  value={mydata.name} name="name" onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit City</Form.Label>
        <Form.Control type="text"  value={mydata.city} name="city" onChange={handleInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Name</Form.Label>
        <Form.Control type="text"  value={mydata.fees} name="fees" onChange={handleInput}  />
      </Form.Group>

      <Button variant="primary" type='submit' onClick={handleSubmit} >
        Edit Data
      </Button>
      
      </Form>

        </>
    )
}

export default EditData;