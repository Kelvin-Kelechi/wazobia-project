import axios from "axios";
import React from "react";

import { UserAuth } from "../../context/AuthContext";
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

const EditItem = () => {
  const { close, name, descript, setDescript, setName, userId, getUser } =
    UserAuth();
  const baseURL = `https://test-api.sytbuilder.com`;
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const resp = await axios.put(
        `${baseURL}/items/${userId}`,
        {
          name: name,
          description: descript,
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
        <CreateItemH1>Edit Item</CreateItemH1>
        <Line />

        <form>
          <CreContainer3> 
            <Name>Name</Name>
            <Input
              type="text"
              placeholder=" Input item name here"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </CreContainer3>
          <CreContainer4>
            <AddNote>Add Note</AddNote>
            <textarea
              placeholder=" Type here"
              value={descript}
              onChange={(e) => {
                setDescript(e.target.value);
              }}
            ></textarea>
          </CreContainer4>

          <CreContainer2>
            <CancelBtn onClick={close}>
              <Cancel>Cancel</Cancel>
            </CancelBtn>

            <CreateBtn
              onClick={() => {
                handleUpdate();
                close();
              }}
            >
              <Create>Add event</Create>
            </CreateBtn>
          </CreContainer2>
        </form>
      </CreContainer>
    </CreContainer1>
  );
};

export default EditItem;
