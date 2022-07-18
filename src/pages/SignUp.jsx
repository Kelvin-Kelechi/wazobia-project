import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {   Base3, Base4,  Button, Container, Container2, Container3, Container4, Container5, Container6, 
      H1, Input, P, P1 } from './styles/SignUp.styled';
import { UserAuth } from '../context/AuthContext'
import {Link } from 'react-router-dom'
 
const SignUp = () => {
 
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState('')
    const navigate = useNavigate()
    const {creatUser} = UserAuth()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        setError('')
        try{
            await creatUser(email,password)  
           navigate('/dashboard');
        } catch(e){
              setError(e.message)
            console.log(e.message)
        }

    }

  return (
    <Container>
        <Container2>
            <Container3>
                <Container4>
                    <H1>Create an Account</H1>
                    <P>Already have an Account? <Link to='/login'>Log in</Link> </P>
                </Container4>
                <Container5>
                         
                    <Base3>
                        <label>Email Address</label>
                        <Input onChange={(e)=> setEmail(e.target.value)} type="email"   placeholder='   Type your email address here'/>
                    </Base3>
                    <Base4>
                        <label>Password</label>
                        <Input onChange={(e)=> setPassword(e.target.value)} type="password"   placeholder='    Type here password here'/>  
                    </Base4>
                    
                </Container5>
                <Container6>
                    <Button onClick={handleSubmit}>
                         <P1>Sign Up</P1>
                    </Button>
                </Container6>
            </Container3>
        </Container2>
    </Container>
  )
}

export default SignUp