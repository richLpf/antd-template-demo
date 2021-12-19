/**
 * @function exportCSV
 * @description 下载csv文件
 * @param {Array} fields 表头字段
 * @param {Array} dataSource 文件数据
 * @param {String} filename 文件名
 */

async function exportCSV({
  fields = [],
  dataSource = [],
  filename = "download",
}) {
  const download = (csv) => {
    try {
      const blob = new Blob([csv, { type: "text/csv" }]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  };
  try {
    const { Parser } = await import("json2csv");
    const csv = new Parser({ fields, withBOM: true }).parse(dataSource);
    download(csv);
  } catch (err) {
    console.error(err);
  }
}

export default exportCSV;
