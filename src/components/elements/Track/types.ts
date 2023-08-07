export type TrackImage = {
  id?: string;
  url?: string;
  width?: number;
  height?: number;
};

export type TrackName = {
  id: string;
  name: string;
  url: string;
};

export type TrackAlbumName = {
  id: string;
  name: string;
  url: string;
};

export type TrackArtistName = {
  id: string;
  name: string;
  url: string;
};

export type TrackForPlaylistProps = {
  name: TrackName;
  image: TrackImage;
};

export type TrackForAlbumProps = {
  name: TrackName;
  album: TrackAlbumName;
};

export type TrackForArtistProps = {
  name: TrackName;
  listener: number;
};

export type TrackControlProps = {
  content: TrackForAlbumProps | TrackForPlaylistProps | TrackForArtistProps;
};

export type TrackProps = {
  pos: number;
  isFavorited: boolean;
  type: "album" | "playlist" | "artist";
  content: TrackForAlbumProps | TrackForPlaylistProps | TrackForArtistProps;
  time: number;
};

export type TrackContextType = {
  type: "album" | "playlist" | "artist";
  content: TrackForAlbumProps | TrackForPlaylistProps | TrackForArtistProps;
};

export type TrackContentType<T> = T extends "album"
  ? TrackForAlbumProps
  : T extends "playlist"
  ? TrackForPlaylistProps
  : T extends "artist"
  ? TrackForArtistProps
  : never;

export type TrackPropsGeneric<T> = {
  pos: number;
  isFavorited: boolean;
  type: T;
  content: TrackContentType<T>;
  time: number;
};
