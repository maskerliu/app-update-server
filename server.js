const express = require('express')
var bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var desktop_app_version = '1.0.1';
var desktop_app_url = 'http://127.0.0.1:8080/update.zip';

app.post('/versionCheck', function (req, res) {
  if (req.body && req.body.current != desktop_app_version) { // check for server side
    res.write(JSON.stringify({
      "version": desktop_app_version,
      "asar": desktop_app_url,
      "info": "1.修复bug\n2.增加自动更新\n3.杀个程序员祭天\n4.不知道说些啥了\n5.还是再说点吧"
    }).replace(/[\/]/g, '\\/'));
  } else {
    res.write(JSON.stringify({ "last": desktop_app_version }).replace(/[\/]/g, '\\/'));
  }
  res.end();
});

app.listen(3000)
console.log('run port: 3000')