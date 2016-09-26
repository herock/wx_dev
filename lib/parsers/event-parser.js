module.exports = function(event, event_key) {
    switch(event) {
        case 'CLICK':
            switch(event_key) {
                case 'menu1':
                    key = 'menu1';
                    break;
                case 'menu2':
                    key = 'menu2';
                    break;
                default:
                    key = 'no menu';
                    break;
            }
            reContent = 'Click ' + key;
            break;
        case 'VIEW':
            reContent = 'View'
            break;
        default:
            reContent = event;
            break;
    }
    return reContent;
}
