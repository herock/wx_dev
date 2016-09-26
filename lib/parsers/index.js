module.exports = function(data) {
    var msg_type = data.msgtype;
    var reContent;
    switch(msg_type) {
        case 'text':
            reContent = require('./text-parser.js')(data.content);
            break;
        case 'voice':
            reContent = require('./voice-parser.js')(data.recognition);
            break;
        case 'image':
            break;
        case 'video':
            break;
        case 'location':
            break;
        case 'shortvideo':
            break;
        default:
            break;
    }
    // reContent = JSON.stringify(reContent);
    return reContent;
}
