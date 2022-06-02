import React from "react";
import { useState, useEffect } from "react";
import ProjectList from "./list";
import SearchPanel from "./searchPanel";
import { cleanObject } from "../../utils";
import * as qs from "qs";
import { useMount } from "../../utils";
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListPage = () => {
  const [users, setUsers] = useState([]);

  const [projectList, setProjectList] = useState([]);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          setProjectList(await res.json());
        }
      }
    );
  }, [param]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <ProjectList projectList={projectList} users={users} />
    </div>
  );
};
