import React, { useState } from 'react'
import Project from '../Project/Project'
import './Admin.css'
import C_C from './courseandcertificate/C_C'
import NewProject from './NewProject.js/NewProject'

function Admin() {

    const [inputs, setinputs] = useState()

    const handleChange = (e)=>{
                const name = e.target.name; 
                const value = e.target.value; 
                setinputs({...inputs,[name]:value})
    }

        const [Manage, setManage] = useState(false)
       

    const login =()=>{
            if(inputs.username === process.env.REACT_APP_USERNAME && inputs.password === process.env.REACT_APP_PASSWORD){
                setManage(true);
            }
    }

  return (
    <div style={{width:"80%",height:"60vh",margin:"auto"}}>

          

            {Manage === true ? <>
                <h3>Manage your Projects</h3>  

                <NewProject/>
                {/* add new certifications  */}
                <C_C/>



            {/* <Project/> */}



            </> : <>
            <h3 style={{textAlign:"center"}}>Login to continue... 😍</h3>
            <div className='admin-form'>
                <input type="text" placeholder='Username' name='username'  onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' onChange={handleChange} />

                    <button onClick={login}>Login</button>
            </div>
            </>}

         

    </div>
  )
}

export default Admin