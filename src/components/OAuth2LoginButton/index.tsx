import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Space, Typography } from "antd";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type OAuth2LoginButtonType = {
  className?: string;
  icon?: IconProp;
  label: string | ReactNode;
  align?: "start" | "end" | "center" | "baseline";
  size?: number;
};

export interface OAuth2LoginButtonProps extends OAuth2LoginButtonType {}

export function IsIconProps(icon: IconProp | ReactNode) {
  return !(icon instanceof Array);
}

export function IsStrLabel(label: String | ReactNode) {
  return typeof label === "string";
}

const isFontAwesomeIcon = (icon: any) => {
  return icon.type === FontAwesomeIcon;
};

const OAuth2LoginButton = (props: OAuth2LoginButtonProps) => {
  return (
    <Space
      className={classNames(
        "px-4 py-2 border rounded-md w-full",
        "bg-white hover:bg-neutral-300",
        "cursor-default ",
        `items-${props.align ?? "start"}`,
        props?.className
      )}
      size={props.size && 8}
      direction="horizontal"
    >
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {IsStrLabel(props.label) ? (
        <Typography className={classNames("text-base")}>
          {props.label}
        </Typography>
      ) : (
        props.label
      )}
    </Space>
  );
};

export default OAuth2LoginButton;
