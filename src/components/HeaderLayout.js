import React from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";

export function HeaderLayout({ showHeaderPath = [], onLogout }) {
  const { pathname } = useLocation();
  return <div>{showHeaderPath.indexOf(pathname) !== -1 && <MainHeader />}</div>;
}
