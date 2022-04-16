import React from "react";
import { MyContent } from "./index";

function diff(prev, next) {
  console.log(prev, next);
  return true;
}

function Child2() {
  return (
    <>
      <MyContent.Consumer>
        {({ username, age }) => {
          return (
            <div>
              <p>this is a child2 component</p>
              <div>username: {username}</div>
              <div>age: {age}</div>
            </div>
          );
        }}
      </MyContent.Consumer>
    </>
  );
}

export default React.memo(Child2, diff);
