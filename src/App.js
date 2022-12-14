import React from "react";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import GlobalStyled from "./pages/styles/GlobalStyle";
import Dashboard from "./component/home/Dashboard";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
