import React, { useState } from "react";
interface ISong {
  pos?: number;
  type: "album" | "playlist";
  isFavorited: boolean;
  isActive: boolean;
}

const Song = (props: ISong): JSX.Element => {
  const [isActive, setActive] = useState<Boolean>(props.isActive ?? false);
  return (
    <div className="flex flex-row justify-content align-items">
      {props.pos ?? <div className="text-base">{props.pos}</div>}
    </div>
  );
};

export default Song;
