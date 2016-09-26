var app = require('express')(),
    conf = require('.lib/config'),
    wechat = require('.lib/wechat'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));

wechat(conf.wechat);

wechat.createMenu(require('./lib/menu.json'));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.listen(8018, function(err) {
  console.log('listening at 8018...')
})
