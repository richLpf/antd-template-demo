import moment from "moment";

export const generateDate = (name, random) => {
  let result = [];
  for (let i = 5; i > 0; i--) {
    let obj = {
      name: name,
      date: moment().subtract(i, `days`).format("YYYY-MM-DD"),
      value: random[i],
    };
    result.push(obj);
  }
  return result;
};

export const generateTwoLine = () => {
  let random1 = [1, 4, 2, 7, 3, 6];
  let random2 = [0, 1, 0, 2, 0, 1];
  return [
    ...generateDate("发送量", random1),
    ...generateDate("上行量", random2),
  ];
};

export const LiquidData = {
  percent: 0.25,
  outline: {
    border: 4,
    distance: 8,
  },
  wave: {
    length: 128,
  },
};
