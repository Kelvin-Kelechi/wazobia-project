import React from 'react'
import { AddNote, Cancel, CancelBtn,  Create, CreateBtn, CreateItemH1, CreContainer, CreContainer1, CreContainer2, CreContainer3, CreContainer4, Input, Line, Name, Rectangle } from './styles/CreateItem.style'

const EditItem = ({setEdit, title , setTitle, setBody, body, handleEdit}) => {
  
  return (
    <CreContainer1>
      <Rectangle></Rectangle>
        <CreContainer>
           <CreateItemH1>
                Edit Item
            </CreateItemH1>
          <Line />

          <form >
            <CreContainer3>
                    <Name>
                        Name
                    </Name>
                    <Input type="text" placeholder=' Input item name here'
                    value={title} 
                    onChange={(e)=>{
                      setTitle(e.target.value);
                  }}
                     />
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
            setEdit(false);
           }}> 
                  <Cancel>Cancel</Cancel>
            </CancelBtn>

            <CreateBtn   onClick={handleEdit} >
                  <Create >Add event</Create>      
            </CreateBtn>
        </CreContainer2>
        </form>

        </CreContainer>

    </CreContainer1>
  )
}

export default EditItem