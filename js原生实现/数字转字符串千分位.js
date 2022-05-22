function thousandth(str) {
  return str.replace(/\d(?=(?:\d{3})+(?:\.\d+|$))/g, '$&,')
}
