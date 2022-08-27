import React from "react";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";
import {
  DashContainer10,
  DashContainer11,
  DashContainer12,
  DashContainer6,
  DashContainer7,
  DashContainer8,
  DashContainer9,
  DeleteBtn,
  Descript,
  EditBtn,
  Item,
  Name,
  Text,
} from "../styles/Dashboard.style";
import Empty from "../ui/Empty";
const BlogList = () => {
  const { open, post, selectItem, getUser, loading } = UserAuth();
  const baseURL = `https://test-api.sytbuilder.com`;
  const handleDelete = async (uuid) => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.delete(`${baseURL}/items/${uuid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
    getUser();
  };

  return (
    <>
      <DashContainer6>
        {post.length > 0 &&
          post.map((posts) => (
            <DashContainer7 key={posts.uuid}>
              <DashContainer8>
                <DashContainer9>
                  <Name style={{ fontFamily: "verdana" }}>name</Name>
                  <Item style={{ fontFamily: "verdana" }}> {posts.name}</Item>
                </DashContainer9>
                <DashContainer10>
                  <DashContainer11>
                    <Descript style={{ fontFamily: "verdana" }}>
                      Description
                    </Descript>
                    <Text style={{ fontFamily: "verdana" }}>
                      {posts.description}
                    </Text>
                  </DashContainer11>
                  <DashContainer12>
                    <EditBtn
                      style={{ fontFamily: "verdana" }}
                      onClick={() => {
                        open();
                        selectItem(posts.uuid);
                      }}
                    >
                      Edit
                    </EditBtn>
                    <DeleteBtn
                      style={{ fontFamily: "verdana" }}
                      onClick={() => {
                        handleDelete(posts.uuid);
                      }}
                    >
                      Delete
                    </DeleteBtn>
                  </DashContainer12>
                </DashContainer10>
              </DashContainer8>
            </DashContainer7>
          ))}
        {post.length === 0 && !loading && <Empty />}
      </DashContainer6>
    </>
  );
};

export default BlogList;
