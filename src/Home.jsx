import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Home = () => {

  let [student,setStudent] = useState({
    stuname:"",
    stuemail:""
  })
  //?Destructuring
    let {stuname,stuemail} = student

    let navigate = useNavigate()

    let handleChange = (event)=>{
       let {name,value} = event.target
       setStudent({...student,[name]:value})
    }

    let handleSubmit = (e) =>{
        e.preventDefault()
        console.log(student);
        try{
          if(stuname==="" && stuemail===""){
            alert("Please fill the fields")
          }else if(stuname===""){
              alert("Name field is empty please fill it")
          }else if(stuemail===""){
            alert("Email field is empty please fill it")
          }
          else{
          let payload = {
            stuname,
            stuemail
          }
          axios.post("http://localhost:5000/student",payload)
          navigate("/viewall")
          toast.success('Successfully added!')
          }
        }catch(e){
          console.log(e);
        }finally{
          setStudent({
            stuname:"",
            stuemail:""
          })
        }
    }
  return (
    <>
    <NavBar/>
    <h1>Welcome to Home Page</h1>
    <form onSubmit={handleSubmit}>
        <legend>ADD STUDENT</legend>
        <div>
            <input type="text" placeholder='Enter the name' value={stuname} name='stuname' onChange={handleChange}/>
        </div>
        <div>
            <input type="text" placeholder='Enter the email' value={stuemail} name='stuemail' onChange={handleChange}/>
        </div>
        <div>
            <button className='add'>ADD STUDENT</button>
        </div>
    </form>
    </>
  )
}

export default Home