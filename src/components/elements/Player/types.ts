import { ReactNode } from "react";

export type PlayerControlType = {
  onNext?: () => void;
  onPrev?: () => void;
  onPlay?: () => void;
};

export type PlayerProgressionType = {
  startTime: number | string;
  endTime: number | string;
};

export type PlayerContentType = {
  name: string | ReactNode;
  artist: string | ReactNode;
  isFavorited: boolean;
};
