"use client";
import TitleAndContent from "@/components/elements/TitleAndContent/TitleAndContent";
import TrackItem from "@/components/elements/TrackItem";

export default function Top100Global() {
  return (
    <div className="w-full flex flex-col">
      <TitleAndContent title="Top 100 Global">
        <TrackItem
          duration={1000}
          name="hello world"
          href="#"
          id=""
          artists={{
            href: "",
            id: "",
            name: "Adele",
            type: "artist",
            uri: "",
          }}
        />
      </TitleAndContent>
    </div>
  );
}
