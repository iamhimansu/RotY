var roty = document.querySelectorAll('[roty]');
var Roty;
rotate = (element, angle = '0') => {
    element.style.transform = `rotate(${angle}deg)`;
    element.style.transformOrigin = `center`;
}
speed = (element, duration = '0.5') => {
    element.style.transitionDuration = `${duration}s`;
}
reformatData = (data) => {
    if (data || data.length > 0) {
        var created_string = data.split(":").join('":"').split(";").join('","').replace(/\s+/g, '');
        var rotyObj = JSON.parse('{"' + created_string + '"}');
        return rotyObj;
    } else { return Roty.config; }
}
roty.forEach(thisroty => {

    var rotyAttr = thisroty.getAttribute("roty");

    thisroty.addEventListener((reformatData(rotyAttr).mode || Roty.config.mode), function() {
        rotate(this, (reformatData(rotyAttr).angle || Roty.config.angle));
        speed(this, (reformatData(rotyAttr).speed || Roty.config.speed));
    });

    thisroty.addEventListener((reformatData(rotyAttr).unset || Roty.config.unset), function() {
        rotate(this, 0);
    })
});