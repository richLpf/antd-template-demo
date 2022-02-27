import React, { useState } from "react";
import { Button } from "antd";

function MemoComponent() {
  const [count, setCount] = useState(0);

  console.log("渲染次数", count);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>测试</Button>
      this is a component
    </>
  );
}

export default MemoComponent;
