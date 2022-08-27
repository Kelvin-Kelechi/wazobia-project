import React from "react";
import EditItem from "./EditItem";
import CreateItem from "./CreateItem";
import { UserAuth } from "../../context/AuthContext";
import {
  DashContainer,
  DashContainer2,
  SocialIcon,
} from "../styles/Dashboard.style";
import BlogList from "./BlogList";

import Navbar from "./Navbar";
import Preloader from "../ui/Preloader";


const Dashboard = () => {
  const { create, setCreate, edit, loading } = UserAuth();

  return (
    <DashContainer>
      <Navbar />

      <DashContainer2
        onClick={() => {
          setCreate(true);
        }}
      >
        <SocialIcon size={40} />
      
      </DashContainer2>
      {loading ? <Preloader/> : <BlogList />}
      
      {create && <CreateItem />}
      {edit && <EditItem />}
    </DashContainer>
  );
};

export default Dashboard;
