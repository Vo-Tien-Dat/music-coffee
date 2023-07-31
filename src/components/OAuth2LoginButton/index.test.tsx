import { ReactNode } from "react";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OAuth2LoginButton from ".";

function IsIconProps(icon: IconProp | JSX.Element) {
  return typeof icon === "object" && icon !== null && !(icon instanceof Array);
}

const isFontAwesomeIcon = (icon: any) => {
  return icon.type === FontAwesomeIcon;
};

const Test = () => {
  return <h1></h1>;
};

console.log(IsIconProps(<Test />));
console.log(isFontAwesomeIcon(faFaceAngry));
