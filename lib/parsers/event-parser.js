module.exports = function(event, eventkey) {
    var reContent;
    switch(event.toLowerCase()) {
        case 'click':
            // switch(eventkey) {
            //     case 'menu1':
            //         menu = 'menu1';
            //         break;
            //     case 'menu2':
            //         menu = 'menu2';
            //         break;
            //     default:
            //         menu = 'other menu';
            //         break;
            // }
            reContent = 'Click ' + eventkey;
            break;
        case 'view':
            reContent = 'View';
            break;
        default:
            reContent = event;
            break;
    }
    return reContent;
}
