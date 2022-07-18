import React,{useState, useEffect} from "react"
import EditItem from "./EditItem"
import { useNavigate } from 'react-router-dom';
import CreateItem from './CreateItem'
import { UserAuth } from "../context/AuthContext"
import { DashContainer,  DashContainer2, DashContainer4, DashContainer5,H2, H3, LogOut1, LogOutContainer, SocialIcon
} from './styles/Dashboard.style'
import BlogList from "./BlogList";

const Dashboard = () => {
    

   const [data, setData] = useState([]);
   const {user, logout} = UserAuth();
 
   const [create, setCreate] = useState(false);
   const [edit, setEdit] = useState(false);
   
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');     
   const [userId, setUserId] = useState(null);   
   const navigate = useNavigate(); 
 

    useEffect(()=>{
      getUser();
  },[]);

  const getUser=()=>{
       fetch('http://localhost:8000/posts')
       .then( res=>{
            return res.json()
       })
       .then( data=>{
           setData(data)
           {null && setTitle(data[0].title)}
           {null &&  setBody(data[0].body)}
           { null &&  setUserId(data[0].id)}
       })
  }
 // console.log(data)



 const handleLogOut = async () => {
   try {
      await logout()
      navigate('/login')
      console.log('you are logged out')
   } catch (e) {
      console.log(e.message)
   }
 }



const handleDelete = (id) =>{
fetch(`http://localhost:8000/posts/${id}`, {
      method:'DELETE'
}).then((result)=>{
      result.json().then((resp)=>{
         console.warn(resp)
         getUser()
      })
}) 
}

const selectItem = (id)=>{
    let item = data[id-1]
    setTitle(item.title)
    setBody(item.body)
    setUserId(item.id)
}

const handleEdit = ()=>{
    let item ={title,body,userId}
     fetch(`http://localhost:8000/posts/${userId}`, {
        method:'PUT',
        headers:{
          'Accept':'Application/json',
          'Content-type':'Application/json',
        },
        body: JSON.stringify(item)
    }).then((result)=>{
          result.json().then((resp)=>{
            console.warn(resp)
            setEdit(false);
          })
          getUser()
          
    }) 
 }

  return (
   
    <DashContainer>
         <DashContainer2 onClick={()=>{
            setCreate(true);
         }}>
            <SocialIcon size={40} />
         </DashContainer2>

       
         <DashContainer4>
            <H2>Dashboard</H2>
            <DashContainer5>
               <H3>Email: {user.email}</H3>
               {/* <IconContainer>
                 <Icon />
               </IconContainer> */}
            </DashContainer5>
            <LogOutContainer>

               <LogOut1 onClick={handleLogOut}>
                  LogOut
               </LogOut1>

            </LogOutContainer>
         </DashContainer4>
        
  <BlogList setEdit={setEdit} data={data} selectItem={selectItem} handleDelete={handleDelete} />
  {create && <CreateItem  closeCreate={setCreate} getUser={getUser} title={title} setTitle={setTitle} body={body} setBody={setBody} />}
  {edit && <EditItem setEdit={setEdit} title={title} handleEdit={handleEdit} setTitle={setTitle}   body={body} setBody={setBody}  />}

  </DashContainer>
  
  )
}

export default Dashboard