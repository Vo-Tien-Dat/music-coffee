import { ReactNode } from "react";

export interface SongProps {
  src: string;
  pos?: string;
  name: string | ReactNode;
  artist: string | ReactNode;
  urlArtist: string;
}
