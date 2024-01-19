import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleStudent = () => {

    let [student,setStudent]=useState('')

    let navigate = useNavigate()

    let {id} = useParams()
    // console.log(id);

    let getApi = async()=>{
      let {data} = await axios.get("http://localhost:5000/student/"+id)
    //   console.log(data);
      setStudent(data)
    }
    console.log(student);

    let home = () =>{
        navigate("/")
    }

    let back =()=>{
        navigate(-1)
    }
    useEffect(()=>{
        try {
            getApi()
        } catch (e) {
            console.log(e);
        }
    },[])
  return (
    <>
        <section className='details'>
            <h1>Details of {student.stuname}</h1>
            <article className='sub'>
                <h1>SL. No :{student.id}</h1>
                <h1>Name :{student.stuname}</h1>
                <h1>Email :{student.stuemail}</h1>

                <div>
                    <button onClick={home}>
                         Go to Home
                    </button>
                    <button onClick={back}>
                        Go Back
                    </button>
                </div>
            </article>
        </section>
    </>
  )
}

export default SingleStudent