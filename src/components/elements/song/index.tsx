interface ISong {
  pos?: number;
  type: "album" | "playlist";
  isFavorited: boolean;
}

const Song = (props: ISong) => {
  return (
    <div className="flex flex-row justify-content align-items">
      {props.pos ?? <div className="text-base">{props.pos}</div>}
    </div>
  );
};

export default Song;
