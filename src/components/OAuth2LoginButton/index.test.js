"use strict";
exports.__esModule = true;
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
function IsIconProps(icon) {
    return typeof icon === "object" && icon !== null && !(icon instanceof Array);
}
var isFontAwesomeIcon = function (icon) {
    return icon.type === react_fontawesome_1.FontAwesomeIcon;
};
var Test = function () {
    return <h1></h1>;
};
console.log(IsIconProps(<Test />));
console.log(isFontAwesomeIcon(free_solid_svg_icons_1.faFaceAngry));
