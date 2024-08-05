import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Insert=()=>{

    const [input,setinput]=useState({});

    const handleinput= (e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinput(values=>({...values,[name]:value}));
        console.log(input)
        
    }

    const savedata=(e)=>{
      e.preventDefault();
      let API='http://localhost:8080/students/stusave';
      axios.post(API, input).then((res)=>{
        console.log(res)
        toast.success("Data Save Successfully")
        setinput({});
      })
       
    }

    return(
        <>
        <h1 align="center">Insert Student Record</h1>

        <Form style={{width:"60%" , margin:"auto"}}>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Roll No.</Form.Label>
        <Form.Control type="text" placeholder="Roll No." value={input.rollno} name="rollno" onChange={handleinput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="name" value={input.name} name="name" onChange={handleinput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" placeholder="city" value={input.city} name="city" onChange={handleinput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Fees</Form.Label>
        <Form.Control type="text" placeholder="fees" value={input.fees} name="fees" onChange={handleinput} />
      </Form.Group>

      <Button variant="primary" type='submit' onClick={savedata} >
        Save Data
      </Button>
    </Form>
    <ToastContainer />
        </>
    )  
}
export default Insert;