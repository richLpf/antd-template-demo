import * as XLSX from "xlsx";

export function readExcel(file, callback) {
  // 存储获取到的数据
  let data = [];
  // 获取上传的文件对象
  const { files } = file.target;
  if (files && files[0]) {
    // 通过FileReader对象读取文件
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const { result } = event.target;
      // 以二进制流方式读取得到整份excel表格对象
      const workbook = XLSX.read(result, { type: "binary", cellDates: true });
      // 遍历每张工作表进行读取（这里默认只读取第一张表）
      for (const sheet in workbook.Sheets) {
        // eslint-disable-next-line no-prototype-builtins
        if (workbook.Sheets.hasOwnProperty(sheet)) {
          // 利用 sheet_to_json 方法将 excel 转成 json 数据
          data =
            data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet])) || [];
          break; // 如果只取第一张表，就取消注释这行
        }
      }
      // 最终获取到并且格式化后的 json 数据
      // message.success('上传成功！')
      // console.log(data);
      callback && callback(data);
      return data;
    };
    // 以二进制方式打开文件
    fileReader.readAsBinaryString(files[0]);
  } else {
    callback && callback(undefined);
    return undefined;
  }
}
