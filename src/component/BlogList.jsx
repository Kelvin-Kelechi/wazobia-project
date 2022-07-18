 import React from 'react'
 import { DashContainer10, DashContainer11, DashContainer12, DashContainer6, DashContainer7, 
    DashContainer8, DashContainer9, DeleteBtn, Descript,EditBtn, Item, Name, Text } from './styles/Dashboard.style'
     
 const BlogList = ({data, selectItem, handleDelete, setEdit}) => {
   return (
    <DashContainer6>
    {data.map((posts)=>(
        <DashContainer7 key={posts.id}>
             <DashContainer8>
                <DashContainer9>
                    <Name>Name</Name>
                    <Item> {posts.title}</Item>
                </DashContainer9>
                <DashContainer10>
                     <DashContainer11>
                        <Descript>Description</Descript>
                        <Text> {posts.body}</Text>

                    </DashContainer11>
                    <DashContainer12>
                        <EditBtn onClick={()=>{
                                 selectItem(posts.id)
                                setEdit(true);
                            }}>
                                Edit
                        </EditBtn>
                        <DeleteBtn onClick={()=>handleDelete(posts.id)}>
                                Delete
                        </DeleteBtn>

                    </DashContainer12>

                </DashContainer10>

             </DashContainer8>
        </DashContainer7>
    ))}
     
</DashContainer6>
   )
 }
 
 export default BlogList