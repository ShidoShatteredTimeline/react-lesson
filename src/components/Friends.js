import React from "react";

const Friend = ({ data }) => {
  return (
    <div className="Friend-const">
      <img width={100} height={200}></img>
      <h1>Name:{data.name}</h1>
      <h1>Gender:{data.gender}</h1>
    </div>
  );
};
export default Friend;
