import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { RiEditBoxFill } from "react-icons/ri";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdViewList } from "react-icons/md";
import toast from 'react-hot-toast';

const ViewAll = () => {

   let [student,setStudent]=useState([])

  //?async and await-->handling the promise
  let getApi = async() =>{
    let {data} = await axios.get("http://localhost:5000/student")
    setStudent(data)
  }
  console.log(student);
  //?[]-->componentDidMount()-->it runs only once
  //?useEffect is the best place to fetch the data
  useEffect(()=>{
    try {
      getApi()
    } catch (e) {
      console.log(e);
    }
  },[])
  let deletebtn =(id)=>{
    console.log(id);
    axios.delete("http://localhost:5000/student/" + id)
    window.location.assign("/viewall")
    toast.success('Successfully deleted!')
  }
  return (
    <>
    <NavBar/>
    <h1>All Student's Information</h1>
    <table className='view'>
      <thead>
        <tr>
          <th>Sl. No</th>
          <th>Name</th>
          <th>Email</th>
          <th colSpan={3}>Options</th>
        </tr>
      </thead>
      <tbody>
        {student.map((x)=>{
          // console.log(x);
          return (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.stuname}</td>
              <td>{x.stuemail}</td>
              <td>
                <NavLink to={`/update/${x.id}`}>
                  <button>UPDATE <RiEditBoxFill /></button>
                </NavLink>
              </td>
              <td>
                <button onClick={()=>deletebtn(x.id)}>DELETE <FaDeleteLeft /></button>
              </td>
              <td>
                <NavLink to={`/single/${x.id}`}>
                <button>VIEW-MORE <MdViewList /></button>
                </NavLink>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  )
}

export default ViewAll