import React from "react";
import { object, string, number, date } from "yup";
import { Button } from "@mui/material";

function YupDemo() {
  let userSchema = object({
    name: string().required(),
    age: number().required(),
    email: string().email(),
    website: string().url().nullable(),
    createdOn: date().default(() => new Date()),
  });

  let userInfo = {
    name: "jimmy",
    age: "8",
  };

  const test1 = async () => {
    const result = await userSchema.validate(userInfo, { strict: true });
    console.log("result", result);
  };

  const test2 = async () => {
    const result = await userSchema.cast(userInfo);
    console.log("res", result);
  };

  const transform = async () => {
    const reversedString = string()
      .transform((currentValue) => currentValue.split("").reverse().join(""))
      .cast("dlrow olleh");
    console.log("reversedString", reversedString);
  };

  const test = async () => {
    const result = string().test(
      "is-james",
      "this is error",
      (value) => value === "James"
    );
    console.log(result.validateSync("James"));
    // console.log(result.validateSync('jane'))
  };

  return (
    <>
      <Button onClick={test1}>测试Validate</Button>
      <Button onClick={test2}>测试Cast</Button>
      <Button onClick={transform}>测试transform</Button>
      <Button onClick={test}>test方法</Button>
    </>
  );
}

export default YupDemo;
