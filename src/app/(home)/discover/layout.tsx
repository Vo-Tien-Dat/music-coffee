export default function DiscoverLayout(props: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full grid md:grid-row-6 bg-neutral-200">
      {props.children}
    </div>
  );
}
