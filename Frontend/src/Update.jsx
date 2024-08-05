import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import delimg from './images/delete.png';
import edimg from './images/edit.png';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update=()=>{
    const [mydata,setmydata]=useState([]);
const navigate=useNavigate();

    const loaddata=()=>{
        let api="http://localhost:8080/students/stuupdatepage";
        axios.get(api).then((res)=>{
            setmydata(res.data);
        })
    }

    useEffect(()=>{
        loaddata();
    },[])

    const deleteData=(myid)=>{
        let api="http://localhost:8080/students/studatadelete";
        axios.post(api,{myid:myid}).then((res)=>{
            toast.warning("Data Deleted Successfully")
            loaddata();
        })
    }

    const myEdit=(myid)=>{
        navigate(`/editdata/${myid}`)
       }
    

    const ans=mydata.map((key)=>{
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                    <td>
                        <img style={{cursor:"pointer"}} onClick={()=>{deleteData(key._id)}} src={delimg} width="30" height="30" />
                    </td>
                    <td>
                    <img style={{cursor:"pointer"}}  onClick={()=>{myEdit(key._id)}} src={edimg} width="30" height="30" />
                    </td>
                </tr>
            </>
        )
    })


    return(
        <>
        <h1 align="center">Update Page</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Roll Numbr</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
      <ToastContainer />
        </>
    )
}
export default Update;