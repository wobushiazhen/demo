
// 文件流
function downloadFile(name = "a.jpg") {
  axios({
    url: baseurl + "/getFileStream",
    method: "GET",
    responseType: "blob", // 设置响应数据类型为 blob
  })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("下载文件时出现错误:", error);
    });
}
