import React from "react";
import { useState, useEffect } from "react";

function SearchPanel({ users, param, setParam }) {
  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            value={param.name}
            onChange={(e) =>
              setParam({
                ...param,
                name: e.target.value,
              })
            }
          />
          <select
            value={param.personId}
            onChange={(e) =>
              setParam({
                ...param,
                personId: e.target.value,
              })
            }
          >
            <option value={""}>Project Manager</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchPanel;
