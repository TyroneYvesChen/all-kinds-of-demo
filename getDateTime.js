/**
 * 要求返回的格式如下：2022-01-07 08:08:08
 * @returns {string}
 */
function getDateTime() {
  let data = new Date(),
    year = data.getFullYear(),
    month = data.getMonth() + 1,
    day = data.getDate(),
    hour = data.getHours(),
    min = data.getMinutes(),
    second = data.getSeconds()

  // 当月、日、时、分、秒数字小于10时，补0。
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  if (min < 10) {
    min = '0' + min
  }
  if (second < 10) {
    second = '0' + second
  }

  return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + second
}
