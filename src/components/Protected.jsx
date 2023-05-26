import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getProfile } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn, token } = useSelector((state) => state.auth);
  console.log(isLoggedIn,token);
  useEffect(() => {
    if (!token && !isLoggedIn) {
      navigate("/login");
      return;
    }
    dispatch(getProfile());
  }, [isLoggedIn, navigate, token,dispatch]);

  return children;
}

export default Protected;
