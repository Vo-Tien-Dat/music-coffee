import React, { FC, createContext, isValidElement } from "react";

import useHover from "@/hooks/useHover";
import { Typography } from "antd";
import {
  CardImageProps,
  CardProps,
  CardContentProps,
  CardContextType,
} from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CardContext = createContext<CardContextType>({});
const { Provider } = CardContext;

export const CardImage: FC<CardImageProps> = ({ src, defaultSrc }) => {
  return (
    <img
      className="rounded-xl"
      alt="image"
      src={src ?? defaultSrc}
      style={{
        width: "100%",
        aspectRatio: 4 / 3,
      }}
    ></img>
  );
};

export const CardName: React.FC<{ name: any }> = ({ name }) => {
  return (
    <>
      {React.isValidElement(name) ? (
        name
      ) : (
        <Typography className="md:text-base lg:text-lg xl:text-2xl 2xl:text-2xl font-bold">
          {name}
        </Typography>
      )}
    </>
  );
};

export const CardOwner: React.FC<{ owner: any }> = ({ owner }) => {
  return <div>{React.isValidElement(owner) ? owner : owner}</div>;
};
export const CardContent = ({ name, owner }: Required<CardContentProps>) => {
  return (
    <div className="w-full flex flex-row items-center px-4 py-2">
      <div className="flex flex-col grow">
        <CardName name={name} />
        <CardOwner owner={owner} />
      </div>
      <CardControl />
    </div>
  );
  ``;
};

export const CardControl = () => {
  const [isPlay, setPlay] = useState<boolean>(true);
  const handlePlay = () => {
    setPlay(!isPlay);
  };
  return (
    <div
      className="flex justify-center items-center rounded-full bg-black px-2 py-2 h-8 w-8"
      onClick={handlePlay}
    >
      <FontAwesomeIcon
        icon={isPlay ? faPlay : faPause}
        className="text-white sm:text-base md:text-lg lg:text-base xl:text-base 2xl:text-xl"
      />
    </div>
  );
};

export default function Card<T>({
  src,
  defaultSrc,
  content,
  renderContent,
}: CardProps<T>) {
  const classNames = `flex flex-col rounded-xl bg-white`;
  const cardValue: CardContextType = {};
  return (
    <Provider value={cardValue}>
      <div
        style={{
          minWidth: 192,
          aspectRatio: 8 / 6,
          width: "100%",
        }}
        onClick={() => {}}
        className={classNames}
      >
        <CardImage src={src} defaultSrc={defaultSrc} />
        {renderContent?.(content) ?? <></>}
      </div>
    </Provider>
  );
}
