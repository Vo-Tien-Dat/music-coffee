import { FC } from "react";
import { ContentProps, TitleAndContentProps, TitleProps } from "./types";

export const Title: FC<TitleProps> = ({ title }) => {
  if (typeof title === "string") {
    return <div className="text-xl font-bold text-slate-600">{title}</div>;
  }
  return <>{title}</>;
};

const TitleAndContent: FC<TitleAndContentProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <Title title={title} />

      {children ?? <></>}
    </div>
  );
};

export default TitleAndContent;
