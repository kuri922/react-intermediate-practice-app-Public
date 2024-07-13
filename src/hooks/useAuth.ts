import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/user";
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false
          setLoginUser({ ...res.data, isAdmin })
          navigate("/home");
        } else {
          console.error("No user data found");
        }
      }).catch((error) => {
        console.error("Error fetching user data", error);
      }).finally(() => {
        setLoading(false);
      });
    },
    [navigate, setLoginUser]
  );

  return { login, loading, setLoginUser };
};
