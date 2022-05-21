var request = new XMLHttpRequest()
request.open('GET', 'index/a/b/c?name=TianTian', true)
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText)
  }
}
request.send()
