import { Outlet } from "react-router";
import React from 'react';
import Header from "./header";
import { Provider } from "react-redux";
import myAppStore from "../store/appstore";

const Home = () => {
  const msg = "welcome";
  return (
    <>
      <Provider store={myAppStore}>
        <Header></Header>
        { }
        <Outlet></Outlet>
      </Provider>
    </>
  );
};

export default Home;