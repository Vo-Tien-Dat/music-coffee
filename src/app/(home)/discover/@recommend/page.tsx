"use client";
import Card from "@/components/elements/Card/Card";
import TitleAndContent from "@/components/elements/TitleAndContent/TitleAndContent";
import { CardProps } from "@/components/elements/Card/types";
import { ArtistTypographyProps } from "@/components/elements/ArtistTypography/types";
import CardsComponent from "@/components/elements/Cards";

interface Album {
  name: string;
  artists: ArtistTypographyProps;
}

const mockApi: CardProps<Album>[] = [
  {
    defaultSrc:
      "https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?w=1060&t=st=1692340368~exp=1692340968~hmac=710818ec11ffb31b870ef259573e7194d3b4174f6c8f24fc7d0dc565a8e43a54",
    content: {
      name: "Vo tien Dat",
      artists: {
        href: "",
        id: "",
        name: "Adele",
        type: "artist",
        uri: "",
      },
    },
  },
  {
    defaultSrc:
      "https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?w=1060&t=st=1692340368~exp=1692340968~hmac=710818ec11ffb31b870ef259573e7194d3b4174f6c8f24fc7d0dc565a8e43a54",
    content: {
      name: "Vo tien Dat",
      artists: {
        href: "",
        id: "",
        name: "Adele",
        type: "artist",
        uri: "",
      },
    },
  },
  {
    src: "https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?w=1060&t=st=1692340368~exp=1692340968~hmac=710818ec11ffb31b870ef259573e7194d3b4174f6c8f24fc7d0dc565a8e43a54",
    defaultSrc:
      "https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?w=1060&t=st=1692340368~exp=1692340968~hmac=710818ec11ffb31b870ef259573e7194d3b4174f6c8f24fc7d0dc565a8e43a54",
    content: {
      name: "Vo tien Dat",
      artists: {
        href: "",
        id: "",
        name: "Adele",
        type: "artist",
        uri: "",
      },
    },
  },
];

export default function Recommend() {
  return (
    <div className="w-full flex flex-col gap-2">
      <TitleAndContent title="Recommend For you">
        <CardsComponent<CardProps<Album>>
          items={mockApi}
          renderItem={(item: CardProps<Album>) => <Card {...item} />}
        />
      </TitleAndContent>
    </div>
  );
}
