// function ftime(datastr) {
//   const dt = new Date(datastr);
//   const y = addzero(dt.getFullYear());
//   const m = addzero(dt.getMonth() + 1);
//   const day = addzero(dt.getDate());
//   const hour = addzero(dt.getHours());
//   const mm = addzero(dt.getMinutes());
//   const ss = addzero(dt.getSeconds());
//   return `${y}-${m}-${day} ${hour}:${mm}:${ss}`;
// }
// function addzero(item) {
//   return item > 9 ? item : '0' + item;
// };
// module.exports = {
//   ftime
// }


function gftime(time) {
  const tm = new Date();
  const y = addzero(tm.getFullYear());
  const m = addzero(tm.getMonth()+1);
  const day = addzero(tm.getDate());
  const h = addzero(tm.getHours());
  const mm = addzero(tm.getMinutes());
  const s = addzero(tm.getSeconds());
  return `${y}-${m}-${day} ${h}:${mm}:${s}`;
}
function addzero(item) {
  return item < 9 ? '0' + item : item;
}

module.exports = {
  gftime
}