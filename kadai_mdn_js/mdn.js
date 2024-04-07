const nowDate = new Date(Date.now());
const year = nowDate.getFullYear();
const month = nowDate.getMonth() + 1;
const day = nowDate.getDate();
console.log(year + '年' + month + '月' + day + '日');