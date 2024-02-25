import React,{useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios'

function Login()
 {
    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event) =>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit=(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email ==="" && errors.password ==="") {
            axios.post('https;//localhost:8081/signup', values)
            .then(res=> {
                if(res.data == "Success"){
                    navigate('/employee');
                } else{
                    alert("No record Existed");
                }
                
            })
            .catch(err =>console.log(err));
        }
    }
    
  return (
    <div  className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
            <form action='' onSubmit={handleSubmit}> 
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" placeholder='Enter Email' name='email'
                     onChange={handleInput} className='form-control rounded-0'></input>
                     {errors.email &&  <span className='text-danger'> {errors.email}</span>}
                
                </div>
                
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.password &&  <span className='text-danger'> {errors.password}</span>}
                </div>
                





                <button type="submit" className='btn btn-success'>Login</button>
                <p>You are agree to our terms and conditions</p>
                <Link to='./signup'><button className='btn btn-default border text-decoration-none'> Creat Account</button> </Link>
            </form>

        </div>
    </div>
  )
}

export default Login