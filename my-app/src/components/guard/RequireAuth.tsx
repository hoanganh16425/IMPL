import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserData } from "../../@core/apis/users/user-interface";
import { getProfile } from "../../@core/apis/users/users";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

interface UserState {
  userData: UserData | null;
}

function RequireAuth() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    const data = await getProfile();
    dispatch(setUserData(data));
  };

  const isAuthenticated = localStorage.getItem("token") !== null;
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }
  return <Outlet />;
}

export default RequireAuth;
