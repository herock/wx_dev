module.exports = function(event, event_key) {
    var reContent;
    switch(event.toLowerCase()) {
        case 'click':
            switch(event_key) {
                case 'menu1':
                    menu = 'menu1';
                    break;
                case 'menu2':
                    menu = 'menu2';
                    break;
                default:
                    menu = 'other menu';
                    break;
            }
            reContent = 'Click ' + menu;
            break;
        case 'view':
            reContent = 'View';
            break;
        default:
            reContent = String(event);
            break;
    }
    return reContent;
}
