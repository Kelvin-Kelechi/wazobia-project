import React, { useState } from "react";
import axios from "axios";
import {
  AddNote,
  Cancel,
  CancelBtn,
  Create,
  CreateBtn,
  CreateItemH1,
  CreContainer,
  CreContainer1,
  CreContainer2,
  CreContainer3,
  CreContainer4,
  Input,
  Line,
  Name,
  Rectangle,
} from "../styles/CreateItem.style";
import { UserAuth } from "../../context/AuthContext";

const CreateItem = () => {
  const { setCreate, getUser } = UserAuth()
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const baseURL = `https://test-api.sytbuilder.com`;

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const resp = await axios.post(
        `${baseURL}/items`,
        {
          name: title,
          description: body,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }

    getUser();
  };
  return (
    <CreContainer1>
      <Rectangle></Rectangle>

      <CreContainer>
        <CreateItemH1>Create Item</CreateItemH1>
        <Line />
        <form>
          <CreContainer3>
            <Name>Name</Name>
            <Input
              type="text"
              placeholder="Input item name here"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </CreContainer3>
          <CreContainer4>
            <AddNote>Add Note</AddNote>
            <textarea
              placeholder=" Type here"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </CreContainer4>

          <CreContainer2>
            <CancelBtn
              onClick={() => {
                setCreate(false);
              }}
            >
              <Cancel>Cancel</Cancel>
            </CancelBtn>

            <CreateBtn
              onClick={(e) => {
                handleCreate(e);
                setCreate(false);
              }}
            >
              <Create>create event</Create>
            </CreateBtn>
          </CreContainer2>
        </form>
      </CreContainer>
    </CreContainer1>
  );
};

export default CreateItem;
