"use client";

import { FC } from "react";
import { TracksProps } from "./types";
import { Typography } from "antd";
import TrackItem from "../TrackItem";
import useHover from "@/hooks/useHover";

export default function Tracks<T>({ items, renderItem }: TracksProps<T>) {
  const [isHover, hoverRef] = useHover();
  return (
    <div className="flex flex-col  w-full">
      {items.map((item: T, index: number) => {
        return (
          <>
            <div
              ref={hoverRef}
              className="flex flex-row items-center w-full hover:bg-neutral-200 rounded-md px-4"
            >
              <Typography className="text-base font-bold">{index}</Typography>
              {renderItem(item)}
            </div>
          </>
        );
      })}
    </div>
  );
}
