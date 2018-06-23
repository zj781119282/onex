/**
 * 时间转换工具
 */

export function timeStampToDate(timeStamp) {
  if (!timeStamp) return;
  let timeString;
  if (!isNaN(timeStamp)) {
    timeString = timeStamp.toString();
  } else {
    timeString = timeStamp;
  }
  if (timeString.length === 10) {
    timeStamp = timeStamp * 1000;
  }
  const time = new Date(timeStamp);
  const year = time.getFullYear();
  const month = time.getMonth() < 9 ? `0${time.getMonth() + 1}` : time.getMonth() + 1;
  const date = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
  const hour = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  return `${year}-${month}-${date} ${hour}:${minutes}:${seconds}`;
}
