import { Typography } from "antd";
import {
  TrackForAlbumProps,
  TrackPropsGeneric,
  TrackForPlaylistProps,
  TrackForArtistProps,
  TrackContentType,
} from "./types";

const TrackAlbumContent = (props: TrackForAlbumProps) => {
  return <div className="flex"></div>;
};

const TrackPlaylistContent = (props: TrackForPlaylistProps) => {
  return <div className="flex"></div>;
};

const TrackArtistContent = (props: TrackForArtistProps) => {
  return <div className="flex"></div>;
};

const TrackControl = () => {
  return <div className="flex flex-row">{}</div>;
};

export default function Track<T>({
  pos,
  type,
  content,
  time,
}: TrackPropsGeneric<T>) {
  return (
    <div className="flex flex-row justify-start items-center px-2 py-2">
      {pos && <Typography className="text-base">{pos}</Typography>}
      <div className="grow"></div>
    </div>
  );
}
