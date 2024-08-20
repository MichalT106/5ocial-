"use client";
import React, { useState, useEffect } from "react";
import { SidebarDemo } from "../components/Sidebar/SideBar";
import Dashboard from "../components/Dashboard/Dashboard";
import Card from "../components/Card/Card";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Content from "../feed/Content";
import Line from "../components/Line/Line";

const Search = () => {
  return (
    <div>
      <SidebarDemo>
        <Dashboard>
          <Filter></Filter>
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </Dashboard>
      </SidebarDemo>
    </div>
  );
};

export default Search;