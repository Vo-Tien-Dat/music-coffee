"use client";

import { FC } from "react";
import { TrackItemProps } from "./types";
import { Typography } from "antd";
import ArtistTypography from "../ArtistTypography/ArtistTypography";
import FormatTime from "@/utils/FormatTime";

const TrackItem: FC<TrackItemProps> = ({
  name,
  href,
  id,
  artists,
  duration,
}) => {
  return (
    <div className="flex flex-row py-2 pl-4 items-center w-full">
      <div className="flex flex-col">
        <a href={href}>
          <Typography className="text-xl font-bold truncate">{name}</Typography>
        </a>
        <ArtistTypography {...artists} />
      </div>
      <div className="grow"></div>
      <Typography className="text-base font-semibold">
        {FormatTime(duration)}
      </Typography>
    </div>
  );
};

export default TrackItem;
