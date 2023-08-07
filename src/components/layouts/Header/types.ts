import { ReactNode } from "react";
export type UserViewType = {
  src?: string;
  name?: ReactNode | string;
  width?: number;
  size?: number;
};

export type UserControlItemType = {
  keys: string;
  icon?: ReactNode;
  label?: string | ReactNode;
};

export type UserControlType = {
  items?: UserControlItemType[];
};

export type UserIconType = {
  iconOpened: ReactNode;
  iconClosed: ReactNode;
};

export type UserProps = {
  data: UserViewType;
  items?: UserControlItemType[];
  onClick?: (key?: string) => void;
};

export type UserContextType = {
  expand: boolean;
  data: UserViewType;
  items?: UserControlItemType[];
  setExpand?: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: (key?: string) => void;
  // userViewRef: React.RefObject<HTMLElement>;
};

export type HeaderContextType = {};

export type HeaderProps = {};
