import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [create, setCreate] = useState(false);
  const [edit, setEdit] = useState(false);
  const [post, setPost] = useState([]);
  const [name, setName] = useState("");
  const [descript, setDescript] = useState("");
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const open = () => setEdit(true);
  const close = () => setEdit(false);

  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 2000);
  }, []);
  const getUser = () => {
    const baseURL = `https://test-api.sytbuilder.com`;
    const token = localStorage.getItem("token");

    axios
      .get(`${baseURL}/items?page=1&count=10`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setPost(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const selectItem = (uuid) => {
    let newEditItem = post.find((posts) => {
      return posts.uuid === uuid;
    });
    setName(newEditItem.name);
    setDescript(newEditItem.description);
    setUserId(newEditItem.uuid);
  };

  return (
    <UserContext.Provider
      value={{
        create,
        setCreate,
        edit,
        close,
        open,
        post,
        userId,
        setPost,
        setName,
        name,
        setDescript,
        descript,
        selectItem,
        getUser,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
