export interface TracksProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
