var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser')

router.route('/')
    .post(xmlBodyParser({
        explicitArray: false
    }), function(req, res, next) {
        var data = req.body.xml;
        var content = data.content;
        var msg_type = data.msgtype;
        if(msg_type == 'text') {
            res_content = text_msg_handler(content);
        } else {
            res_content = 'hi.'
        }
        res.append('Content-Type', 'text/xml');
        res.send(xml({
            xml: [
                {ToUserName: {_cdata: data.fromusername}},
                {FromUserName: {_cdata: data.tousername}},
                {CreateTime: +new Date()},
                {MsgType: {_cdata: 'text'}},
                {Content: {_cdata: res_content}}
            ]
        }))
    })
    .get(function(req, res, next) {
        var str = req.query.echostr;
        res.send(str);
    });

var text_msg_handler = function(content) {
    switch (parseInt(content)) {
        case 1:
            res_msg = '壹';
            break;
        case 2:
            res_msg = '贰';
            break;
        case 3:
            res_msg = '叁';
            break;
        case 4:
            res_msg = '肆';
            break;
        case 5:
            res_msg = '伍';
            break;
        case 6:
            res_msg = '陆';
            break;
        case 7:
            res_msg = '柒';
            break;
        case 8:
            res_msg = '捌';
            break;
        case 9:
            res_msg = '玖';
            break;
        case 0:
            res_msg = '零';
            break;
        default:
            res_msg = '请输入0-9的阿拉伯数字';
    }
    return res_msg;
}

module.exports = router;
