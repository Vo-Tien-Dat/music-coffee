import { Album } from "@/types/Album";
import { Song } from "@/types/Song";
import Link from "next/link";

export interface ISongForAlbum extends Song {
  album: Album;
}

const SongForAlbum = (props: ISongForAlbum) => {
  return (
    <div className="flex flex-row justify-content align-items h-full">
      <Link href={`${process.env.URL_TRACK}${props.id}`}>
        <div className="text-base">{props.name}</div>
      </Link>
      <div className="text-base">{props.album.name}</div>
    </div>
  );
};

export default SongForAlbum;
