"use client";
import TitleAndContent from "@/components/elements/TitleAndContent/TitleAndContent";
import Tracks from "@/components/elements/Tracks";
import { TrackItemProps } from "@/components/elements/TrackItem/types";
import TrackItem from "@/components/elements/TrackItem";

const mockApi: TrackItemProps[] = [
  {
    duration: 1000,
    name: "hello world",
    href: "#",
    id: "",
    artists: {
      href: "",
      id: "",
      name: "Adele",
      type: "artist",
      uri: "",
    },
  },
  {
    duration: 1000,
    name: "hello world",
    href: "#",
    id: "",
    artists: {
      href: "",
      id: "",
      name: "Adele",
      type: "artist",
      uri: "",
    },
  },
  {
    duration: 1000,
    name: "hello world",
    href: "#",
    id: "",
    artists: {
      href: "",
      id: "",
      name: "Adele",
      type: "artist",
      uri: "",
    },
  },
  {
    duration: 1000,
    name: "hello world",
    href: "#",
    id: "",
    artists: {
      href: "",
      id: "",
      name: "Adele",
      type: "artist",
      uri: "",
    },
  },
  {
    duration: 1200,
    name: "hello world",
    href: "#",
    id: "",
    artists: {
      href: "",
      id: "",
      name: "Adele",
      type: "artist",
      uri: "",
    },
  },
  {
    duration: 1000,
    name: "hello world",
    href: "#",
    id: "",
    artists: {
      href: "",
      id: "",
      name: "Adele",
      type: "artist",
      uri: "",
    },
  },
];

export default function Top100USA() {
  return (
    <div className="h-full w-full flex flex-col">
      <TitleAndContent title="Top 100 USA">
        <div
          className="snap-y"
          style={{
            height: 256,
            overflowY: "auto",
          }}
        >
          <Tracks<TrackItemProps>
            items={mockApi}
            renderItem={(item: TrackItemProps) => {
              return <TrackItem {...item} />;
            }}
          />
        </div>
      </TitleAndContent>
    </div>
  );
}
