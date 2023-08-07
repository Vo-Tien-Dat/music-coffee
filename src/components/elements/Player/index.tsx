"use client";
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slider, Space, Typography } from "antd";
import { useState } from "react";
import Image from "next/image";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
import {
  PlayerContentType,
  PlayerControlType,
  PlayerProgressionType,
} from "./types";

export const PlayerControl = (props: PlayerControlType) => {
  const [isPlay, setPlay] = useState<boolean>(false);
  const handlePlay = () => {
    console.log("hello");
    setPlay(!isPlay);
  };
  return (
    <div className="flex flex-row h-full justify-around items-center">
      <div className="w-full grid grid-cols-3 justify-items-stretch">
        <div className="grow justify-self-center">
          <FontAwesomeIcon
            icon={faBackwardStep}
            onClick={props?.onPrev}
            size="xl"
          />
        </div>
        <div className="grow justify-self-center">
          <FontAwesomeIcon
            icon={isPlay ? faPlay : faPause}
            onClick={handlePlay}
            size="xl"
          />
        </div>
        <div className="grow justify-self-center">
          <FontAwesomeIcon
            icon={faForwardStep}
            onClick={props?.onNext}
            size="xl"
          />
        </div>
      </div>
    </div>
  );
};

export const PlayerProgression = ({
  startTime,
  endTime,
}: PlayerProgressionType) => {
  return (
    <Space direction="vertical" size={2}>
      <Slider defaultValue={30} disabled={false} className="w-full" />
      <div className="flex flex justify-between items-center">
        <Typography className="text-sm font-semibold">{startTime}</Typography>
        <Typography className="text-sm font-semibold">{endTime}</Typography>
      </div>
    </Space>
  );
};

export const PlayerContent = ({
  name,
  artist,
  isFavorited,
}: PlayerContentType) => {
  return (
    <>
      {/* <Image src={""} layout="fill" alt="image" className="rounded-xl" /> */}
      <div className="flex flex-row justify-between items-center">
        <Space direction="vertical">
          <Typography className="text-base font-semibold">hello</Typography>
          <Typography className="text-sm ">hello</Typography>
        </Space>
        <FontAwesomeIcon
          className="text-xl"
          icon={isFavorited ? faHeartSolid : faHeartRegular}
        />
      </div>
    </>
  );
};

export default function Player() {
  return (
    <div
      className={classNames(
        "flex flex-col w-full rounded-xl ",
        "px-4 py-4",
        "bg-neutral-400"
      )}
    >
      <PlayerContent
        name="Love in the dark"
        artist="Adele"
        isFavorited={true}
      />
      <PlayerProgression startTime={10} endTime={10} />
      <PlayerControl />
    </div>
  );
}
