import React from "react";
import "./styles.css";
import SplitMenu from "./SplitMenu";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import Form from "./Form";

export default function App() {
  const handleClick = () => {
    alert("form submitted");
  };

  return (
    <div className="">
      <h1>react Containment</h1>
      {/* <SplitMenu left={<LeftMenu />} right={<RightMenu />}>
        <div>
          <h1>this is children of splitmenu</h1>
        </div>
      </SplitMenu> */}

      <Form submit={handleClick}>
        <div>
          <input placeholder="username" />
        </div>
        <div>
          <input placeholder="password" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </Form>
    </div>
  );
}
