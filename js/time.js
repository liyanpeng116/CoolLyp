function startTime(tid){
    var today=new Date();
    var y = today.getFullYear();
    var ms = today.getMonth() + 1;
    var dt = today.getDate();
    var d = today.getDay();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds(); // 在小于10的数字前加一个0
    ms = checkTime(ms);
    dt = checkTime(dt);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById(tid).innerHTML = y+"-"+ms+"-"+dt +" "+ h+":"+m+":"+s;
    setTimeout(function(){
        startTime(tid)
    },1000);
}
function checkTime(i){
    if (i<10){
        i = "0" + i;
    }
    return i;
}
function week(i){
    switch (i) {
        case 0:
            i="星期日";
            break;
        case 1:
            i="星期一";
            break;
        case 2:
            i="星期二";
            break;
        case 3:
            i="星期三";
            break;
        case 4:
            i="星期四";
            break;
        case 5:
            i="星期五";
            break;
        case 6:
            i="星期六";
            break;
    }
    return i;
}
function noon(i){
    if(i < 12){
        return '上午';
    }
    else if(i > 12){
        return '下午';
    }else{
        return '中午';
    }
}