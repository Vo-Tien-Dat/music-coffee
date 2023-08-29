import { ArtistTypographyProps } from "../ArtistTypography/types";

export interface TrackItemProps {
  /*The name of the track */
  name: string;

  /*A link to the WebApi endpoint providing full details of the track */
  href: string;

  /* The ID for Track*/
  id: string;

  /* The artist who perfomed the track */
  artists: ArtistTypographyProps;

  /* The track length in miliseconds */
  duration: number;
}
