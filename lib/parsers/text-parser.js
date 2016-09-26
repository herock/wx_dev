module.exports = function(content) {
    var reContent;
    switch (parseInt(content)) {
        case 1:
            reContent = '壹';
            break;
        case 2:
            reContent = '贰';
            break;
        case 3:
            reContent = '叁';
            break;
        case 4:
            reContent = '肆';
            break;
        case 5:
            reContent = '伍';
            break;
        case 6:
            reContent = '陆';
            break;
        case 7:
            reContent = '柒';
            break;
        case 8:
            reContent = '捌';
            break;
        case 9:
            reContent = '玖';
            break;
        case 0:
            reContent = '零';
            break;
        default:
            reContent = '请输入0-9的阿拉伯数字';
    }
    return reContent;
}
