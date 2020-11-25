import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";
import ContentHeader from "./components/ContentHeader";
import Content from "./components/Content";
import "./css/style.css";

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Menu />
        <SideMenu />
      </div>
      <div>
        <ContentHeader />
        <Content />
      </div>
    </div>
  );
};

export default App;
