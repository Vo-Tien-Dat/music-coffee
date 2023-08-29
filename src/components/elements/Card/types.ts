import { ReactNode } from "react";

export type CardNameType = string | ReactNode;
export type CardOwnerType = string | string[] | ReactNode;

export type CardContextType = {
  onClick?: () => void;
  name?: CardNameType;
};

type RedirectValue = {
  value: string;
  url: string;
};

export type Album = {
  name: string;
  artist: RedirectValue;
  year: string;
};

export type Playlist = {
  name: string;
  artists: RedirectValue[];
};

export type CardContentProps = {
  name?: CardNameType;
  owner?: CardOwnerType;
};

export type CardImageProps = {
  defaultSrc: string;
  src?: string;
};

export type CardProps<T> = {
  src?: string;
  content: T;
  renderContent?: (item: T) => React.ReactNode;
  defaultSrc: string;
};
