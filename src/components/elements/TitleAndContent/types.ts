import React, { ReactNode } from "react";

export interface TitleProps {
  title: string | ReactNode;
}

export interface ContentProps {
  content: string | ReactNode;
}

export interface TitleAndContentProps {
  title: string | ReactNode;
  children?: ReactNode;
}
