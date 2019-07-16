import React from "react";

export const Display = props => {
  return (
    <div>
    <h1>Caculator</h1>
     <div>{props.display.number}</div>
      <div>{props.display.totalResult}</div>
      <div>{props.number}</div>
    </div>
  );
};
