import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Base3,
  Base4,
  Base,
  Based,
  Group,
  Container,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  H1,
  Input,
  P,
  P1,
  Button,
  BsEyeIcon,
  BsEyeSlashIcon,
  Pv,
} from "../styles/SignUp.styled";

import { Link } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";
import Modal from "../../component/ui/Modal";
import Preloader from "../../component/ui/Preloader";
const initialState = {
  fname: "",
  lname: "",
  password: "",
};

const validation = {
  isUpper: false,
  isLenthy: false,
  isNumber: false,
  isSymbol: false,
};
const SignUp = () => {
  const { getUser } = UserAuth();
  const [snu, setSnu] = useState(initialState);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState(validation);
  const [shw, setShw] = useState(false);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8,}])?/g;

  const toggle = () => {
    setOpen(!open);
  };
  const onChangeEmail = (e) => {
    setMsg(null);
    const value = e.target.value;
    setEmail(value);
    if (value && regEx.test(value) === false) {
      setMsg("Wrong email format");
    }
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setSnu({ ...snu, [name]: value });

    if (name === "password") {
      const isLenthy = value.length > 7;
      const isUpper = /[A-Z]/.test(value);
      const isNumber = /[0-9]/.test(value);
      const isSymbol = /[@,#,$,%,&]/.test(value);
      setShw(true);
      setPass({ ...pass, isLenthy, isUpper, isNumber, isSymbol });
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const baseURL = `https://test-api.sytbuilder.com`;
      const resp = await axios.post(`${baseURL}/me`, {
        first_name: snu.fname,
        last_name: snu.lname,
        email: email,
        password: snu.password,
      });
      navigate("/dashboard");
      console.log("You just signed Up");
      console.log(resp.data);
      const { token } = resp.data;
      window.localStorage.setItem("token", token);
    } catch (error) {
      setError(error.response.data);
    }
    getUser();
    setLoading(false);
  };
  return (
    <Container>
      {loading ? (
        <Preloader />
      ) : (
        <Container2>
          <Container3>
            <Container4>
              <H1>Create an Account</H1>
              <P>
                Already have an Account? <Link to="/login">Log in</Link>
              </P>
            </Container4>
            <Container5>
              <Group>
                <Base>
                  <label>Last Name</label>
                  <input
                    name="lname"
                    value={snu.lname}
                    onChange={handleOnchange}
                    type="text"
                    placeholder="Type your last name here"
                    autoComplete="off"
                  />
                </Base>
                <Based>
                  <label>First Name</label>
                  <input
                    name="fname"
                    value={snu.fname}
                    onChange={handleOnchange}
                    type="text"
                    placeholder="Type your first name here"
                    autoComplete="off"
                  />
                </Based>
              </Group>
              <Base3>
                <label>Email Address</label>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  type="email"
                  placeholder="Type your email address here"
                />
              </Base3>
              <Pv>{msg}</Pv>
              <Base4>
                <label>Password</label>
                <Input
                  name="password"
                  value={snu.password}
                  onChange={handleOnchange}
                  type={open ? "text" : "password"}
                  placeholder="Type your password here"
                />
                {open ? (
                  <BsEyeSlashIcon onClick={toggle} />
                ) : (
                  <BsEyeIcon onClick={toggle} />
                )}
              </Base4>
            </Container5>
            {shw && (
              <ul>
                <li
                  style={
                    pass.isUpper ? { color: "#07982f" } : { color: " #999B9F" }
                  }
                >
                  Contains at least one uppercase letter
                </li>
                <li
                  style={
                    pass.isLenthy ? { color: "#07982f" } : { color: " #999B9F" }
                  }
                >
                  Contains eight characters
                </li>
                <li
                  style={
                    pass.isNumber ? { color: "#07982f" } : { color: " #999B9F" }
                  }
                >
                  Contains at least one number
                </li>
                <li
                  style={
                    pass.isSymbol ? { color: "#07982f" } : { color: " #999B9F" }
                  }
                >
                  Contains at least one symbol
                </li>
              </ul>
            )}
            <Container6>
              <Button
                disabled={Object.values(pass).includes(false)}
                onClick={handleSignUp}
              >
                <P1>Sign Up</P1>
              </Button>
            </Container6>
          </Container3>
        </Container2>
      )}
      {error && !loading && <Modal error={error} />}
    </Container>
  );
};

export default SignUp;
