export interface CardsProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
