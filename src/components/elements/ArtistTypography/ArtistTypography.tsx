import { FC } from "react";
import { ArtistTypographyProps } from "./types";

const ArtistTypography: FC<ArtistTypographyProps> = ({ name, href }) => {
  return (
    <a href={href}>
      <div className="text-sm hover:underline inline">{name}</div>
    </a>
  );
};

export default ArtistTypography;
