/** @format */

import React from "react";

export default function DropdownComponent() {
  const items = [
    {
      id: 1,
      name: "Vegitable",
      value: "vegitable",
    },
    {
      id: 2,
      name: "Fruits",
      value: "fruits",
    },
    {
      id: 3,
      name: "Dairy Product",
      value: "dairy",
    },
    {
      id: 4,
      name: "Bread",
      value: "bread",
    },
  ];

  return (
    <>
      <div>
        <select className="p-[10px] border border-green-300 bg-white shadow-sm focus:outline-none focus:ring-2  focus:border-green-500">
          <option value="" disabled selected>
            Select an option
          </option>
          {items.map(({name, value}) => (
            <option value="">{name}</option>
          ))}
        </select>
      </div>
    </>
  );
}
