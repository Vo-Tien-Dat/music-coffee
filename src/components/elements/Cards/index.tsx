"use client";
import { CardsProps } from "./types";

export default function CardsComponent<T>({
  items,
  renderItem,
  ...props
}: CardsProps<T>) {
  const classNames = `grid grid-cols-6 gap-2 w-full`;
  return (
    <div className={classNames} {...props}>
      {items.map((item) => {
        return <div className="col-span-2">{renderItem(item)}</div>;
      })}
    </div>
  );
}
