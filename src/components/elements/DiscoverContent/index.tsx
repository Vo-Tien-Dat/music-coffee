import React, { createContext, useContext } from "react";
import { Typography } from "antd";
import {
  DiscoverContentContextType,
  DiscoverContentItemType,
  DiscoverContentTitleType,
  DiscoverContentType,
  ExpandType,
} from "./types";
import Link from "next/link";
import classNames from "classnames";

type DiscoverContentProps = DiscoverContentType;

type DiscoverContentTitleProps = DiscoverContentTitleType;

type ExpandProps = ExpandType;

const DiscoverContentContext = createContext<DiscoverContentContextType>({
  onClick: () => {},
  items: [],
});

const { Provider } = DiscoverContentContext;

export const DiscoverContentExpand = (props: ExpandProps) => {
  return (
    <Link href={props.href}>
      {typeof props.label === "string" ? (
        <Typography className="text-base font-bold hover:underline-offset-1">
          {props.label}
        </Typography>
      ) : (
        props.label
      )}
    </Link>
  );
};

export const DiscoverContentTitle = (props: DiscoverContentTitleProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="grow">
        <Typography className="text-2xl font-bold">{props.title}</Typography>
      </div>
      <div className="shrink">
        <DiscoverContentExpand {...props.expand} />
      </div>
    </div>
  );
};

export const DiscoverContentItem = () => {
  return <div className="w-full border border-white">votiendat</div>;
};

export const DiscoverContentMenu = () => {
  const { items } = useContext(DiscoverContentContext);
  return (
    <div
      className={classNames(
        "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-4 2xl:grid-col-4",
        "w-full grid gap-4"
      )}
      style={{ minHeight: 64 }}
    >
      {items?.map((item: DiscoverContentItemType, index: number) => {
        return <DiscoverContentItem />;
      })}
    </div>
  );
};

export default function DiscoverContent({
  title,
  label,
  href,
  items,
  onClick,
}: DiscoverContentProps) {
  const discoverContentValue: DiscoverContentContextType = { onClick, items };

  return (
    <Provider value={discoverContentValue}>
      <div className=" w-full flex flex-col gap-2 px-4 py-2">
        <DiscoverContentTitle title={title} expand={{ label, href }} />
        <DiscoverContentMenu />
      </div>
    </Provider>
  );
}
