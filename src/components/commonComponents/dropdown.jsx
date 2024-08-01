/** @format */

import React from "react";

export default function DropdownComponent({items, handleSelect}) {
  return (
    <>
      <div>
        <select
          onChange={handleSelect}
          className="p-[10px] border border-green-300 bg-white shadow-sm focus:outline-none focus:ring-2  focus:border-green-500"
        >
          <option value="" disabled selected>
            Select an option
          </option>
          {items?.map(({name, slug, value, _id}) => (
            <option value={_id} key={_id}>
              {slug ? slug : name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
