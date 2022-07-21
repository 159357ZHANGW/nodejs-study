function dateFormat(datestr) {
  const ttime = new Date(datestr);
  let y = padZero(ttime.getFullYear());
  let m = padZero(ttime.getMonth()+1);
  let day = padZero(ttime.getDate());
  let h = padZero(ttime.getHours());
  let mm = padZero(ttime.getMinutes());
  let s = padZero(ttime.getSeconds());
  return `${y}-${m}-${day} ${h}:${mm}:${s}`
}
function padZero(item) {
  return item < 9 ? '0' + item : item;
}
module.exports = {
  dateFormat
}