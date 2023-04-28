import React from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "./MainHeader";

export function HeaderLayout({ hideHeaderPath = [], onLogout }) {
  const { pathname } = useLocation();
  return (
    <div>
      {hideHeaderPath.indexOf(pathname) === -1 && (
        <MainHeader />
      )}
    </div>
  );
}
