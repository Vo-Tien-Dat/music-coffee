"use client";
export default function DiscoverLayout(props: {
  recommend: React.ReactNode;
  Top100USA: React.ReactNode;
  Top100Global: React.ReactNode;
}) {
  const classNames = `w-full grid grid-cols-6 gap-2 bg-neutral-100 px-4 py-4`;
  return (
    <div className={classNames}>
      <div className="col-span-6">{props.recommend}</div>
      <div className="sm:col-span-6 lg:col-span-3">{props.Top100USA}</div>
      <div className="sm:col-span-6 lg:col-span-3">{props.Top100Global}</div>
    </div>
  );
}
