import React,{useState} from 'react'
import { Base2, Base3, Button, H1, Inputt, LogContainer, LogContainer2, LogContainer3, LogContainer4, LogContainer5, LogContainer6, P, P1  } 
from './styles/Login.style'
import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[error, setError] = useState('')
    const navigate = useNavigate()
    
    const {signin} = UserAuth()

    const handleSignIn = async (e)=>{
        e.preventDefault()
        setError('')
        try{
            await signin(email,password)  
           navigate('/dashboard');
        } catch(e){
            setError(e.message)
            console.log(e.message)
        }

    }
  return (
    <LogContainer>
        <LogContainer2>
            <LogContainer3>
                <LogContainer4>
                    <H1>Log In</H1>
                    <P>If you have no account, <Link to='/'> Sign up</Link> </P>
                </LogContainer4>
                  <LogContainer5>
                     
                        <Base2>
                            <label>Email Address</label>
                            <Inputt onChange={(e)=> setEmail(e.target.value)} type="email"   placeholder=' Type here'/> 
                        </Base2>
                        <Base3>
                            <label>Password</label>
                            <Inputt onChange={(e)=> setPassword(e.target.value)}type="password"   placeholder=' Type here password here'/>
                        </Base3>
                         

                  </LogContainer5>
                  <LogContainer6>
                    <Button onClick={handleSignIn}>
                        <P1>
                            Log In
                        </P1>
                    </Button>
                  </LogContainer6>
            </LogContainer3>

        </LogContainer2>

    </LogContainer>
        
  )
}

export default Login