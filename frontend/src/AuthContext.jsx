import React, { createContext, useState, useContext } from 'react';
import services from "./services"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (credentials) => {
    try {
      // 發送登入請求給後端並確認登入狀態
      // services.auth.login函數會返回一個布爾值，表示登入成功與否
      const loggedIn = await services.auth.login(credentials);
      setIsLoggedIn(loggedIn);
    } catch (error) {
      console.error('登入失敗：', error);
    }
  };
  const logout = async () => {
    try {
        console.log('authcontext');
        await services.auth.logout();
        setIsLoggedIn(false);
    } catch (error) {
      console.error('登出失敗：', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};