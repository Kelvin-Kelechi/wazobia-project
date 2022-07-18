import React from 'react'
import { AddNote, Cancel, CancelBtn,  Create, CreateBtn, CreateItemH1, CreContainer, 
  CreContainer1, CreContainer2, CreContainer3, CreContainer4, Input, Line, Name, Rectangle } from './styles/CreateItem.style'

const CreateItem = ({closeCreate, getUser ,title , setTitle, setBody, body}) => {
  
     

   const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title,body};
   
    fetch('http://localhost:8000/posts', {
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added')
      closeCreate(false);
      
    })
    getUser()
    
 } 
    
     
  return (
    <CreContainer1>
      <Rectangle></Rectangle>
        <CreContainer>
           <CreateItemH1>
                Create Item
            </CreateItemH1>
          <Line />
          <form >
            <CreContainer3>
                    <Name>
                        Name
                    </Name>
                    <Input type="text" placeholder='Input item name here'
                    value={title} 
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }} />
                </CreContainer3>
                <CreContainer4>
                    <AddNote>
                    Add Note
                    </AddNote>
                    <textarea placeholder=' Type here'
                    value={body} 
                    onChange={(e)=>{
                        setBody(e.target.value);
                    }} 
                    ></textarea>
                </CreContainer4>
          
        <CreContainer2>
           <CancelBtn onClick={()=>{
            closeCreate(false);
           }}> 
                  <Cancel>Cancel</Cancel>
            </CancelBtn>

            <CreateBtn  onClick={handleSubmit} >
                  <Create >create event</Create>      
            </CreateBtn>
        </CreContainer2>
        </form>
        </CreContainer>

    </CreContainer1>
  )
}

export default CreateItem