import Link from "next/link";
import { Album } from "@/types/Album";
import { Song } from "@/types/Song";
import { Person } from "@/types/Person";
import FormatTime from "@/utils/FormatTime";

export interface ISongForPlaylist extends Song {
  urlImage: string;
  album: Album;
  artist: Person;
}

const SongForPlaylist = (props: ISongForPlaylist) => {
  return (
    <div className="flex flex-row h-full px-2 py-2 bg-slate-500 rounded-md justify-between items-center">
      <div className="flex flex-col">
        <div className="text-base">{props.name}</div>
        <div className="text-base">
          <Link href={`${process.env.URL_ALBUM}${props.album.id}`}>
            <div className="text-base">{props.artist.name}</div>
          </Link>
        </div>
      </div>
      <div className="text-base text-white">{props.album.name}</div>
      <div className="text-base text-white">{FormatTime(props.time)}</div>
    </div>
  );
};

export default SongForPlaylist;
