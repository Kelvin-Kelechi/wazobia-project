import React, { useState } from "react";
import {
  Base2,
  Base3,
  BsEyeIcon,
  BsEyeSlashIcon,
  Button,
  H1,
  Inputt,
  LogContainer,
  LogContainer2,
  LogContainer3,
  LogContainer4,
  LogContainer5,
  LogContainer6,
  P,
  P1,
  Pv,
} from "../styles/Login.style";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import axios from "axios";
import Preloader from "../../component/ui/Preloader";
import LogModal from "../../component/ui/LogModal";

const Login = () => {
  const { getUser } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [pass, setPass] = useState(true);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const baseURL = `https://test-api.sytbuilder.com`;
  const navigate = useNavigate();
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9*-]+\.[a-z]{2,8}(.[a-z{2,8,}])?/g;

  const toggle = () => {
    setOpen(!open);
  };

  const onChangePass = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length > 7) {
      setPass(false);
    } else {
      setPass(true);
    }
  };

  const emailValid = (e) => {
    setErr(null);
    const value = e.target.value;
    setEmail(value);
    if (value && regEx.test(email) === false) {
      setErr("Wrong email format");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post(`${baseURL}/tokens`, {
        email: email,
        password: password,
      });
      navigate("/dashboard");
      console.log(resp.data);
      console.log("You are logged in");
      const { token } = resp.data;
      window.localStorage.setItem("token", token);
    } catch (err) {
      setErro(err.response.data);
    }
    setLoading(false);
    getUser();
  };
  return (
    <LogContainer>
      {loading ? (
        <Preloader />
      ) : (
        <LogContainer2>
          <LogContainer3>
            <LogContainer4>
              <H1>Log In</H1>
              <P>
                If you have no account, <Link to="/"> Sign up</Link>
              </P>
            </LogContainer4>
            <LogContainer5>
              <Base2>
                <label>Email Address</label>
                <Inputt
                  value={email}
                  onChange={emailValid}
                  type="email"
                  placeholder="Type your email address here"
                 
                />
              </Base2>
              <Pv>{err}</Pv>
              <Base3>
                <label>Password</label>
                <Inputt
                  value={password}
                  onChange={onChangePass}
                  type={open ? "text" : "password"}
                  placeholder="Type your password here"
                />
                {open ? (
                  <BsEyeSlashIcon onClick={toggle} />
                ) : (
                  <BsEyeIcon onClick={toggle} />
                )}
              </Base3>
            </LogContainer5>

            <LogContainer6>
              <Button disabled={pass} onClick={handleSignIn}>
                <P1>Log In</P1>
              </Button>
            </LogContainer6>
          </LogContainer3>
        </LogContainer2>
      )}
      {erro && !loading && <LogModal erro={erro} />}
    </LogContainer>
  );
};

export default Login;
