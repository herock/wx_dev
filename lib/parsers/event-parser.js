module.exports = function(event, event_key) {
    var reContent;
    switch(event.toLowerCase()) {
        case 'click':
            switch(event_key) {
                case 'menu1':
                    key = 'menu1';
                    break;
                case 'menu2':
                    key = 'menu2';
                    break;
                default:
                    key = '';
                    break;
            }
            reContent = 'Click ' + key;
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
