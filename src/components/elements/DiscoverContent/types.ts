import { ReactNode } from "react";

export type ExpandType = {
  href: string;
  label: string | ReactNode;
};

export type DiscoverContentItemType = {};

export type DiscoverContentMenuType = {};

export type DiscoverContentTitleType = {
  title: string | ReactNode;
  expand: ExpandType;
};

export type DiscoverContentType = {
  title: string | ReactNode;
  label: string | ReactNode;
  href: string;
  items?: DiscoverContentItemType[];
  onClick?: () => void;
};

export type DiscoverContentContextType = {
  onClick?: () => void;
  items?: DiscoverContentItemType[];
};
