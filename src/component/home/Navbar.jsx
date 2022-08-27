import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";

import {
  DashContainer4,
  H2,
  H3,
  Icon,
  IconContainer,
  LogOut1,
  LogOutContainer,
  UserName,
} from "../styles/Dashboard.style";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const baseURL = `https://test-api.sytbuilder.com`;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${baseURL}/me`, config)
      .then((res) => {
        setUser(res.data.user);

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleLogOut = () => {
    navigate("/login");
    window.localStorage.removeItem("token");
    console.log("You are logged out");
  };

  return (
    <>
      <DashContainer4>
        <H2 style={{ fontFamily: "verdana" }}>Dashboard</H2>
        <UserName
          onClick={() => {
            setOpen(!open);
          }}
        >
          <H3 style={{ fontFamily: "verdana" }}>
            {user.first_name} {user.last_name}
          </H3>
          <IconContainer>
            <Icon />
          </IconContainer>
          <FaCaretDown />
        </UserName>
        {open && (
          <LogOutContainer onClick={handleLogOut}>
            <LogOut1 style={{ fontFamily: "verdana" }}>Log Out</LogOut1>
          </LogOutContainer>
        )}
      </DashContainer4>
    </>
  );
};

export default Navbar;
