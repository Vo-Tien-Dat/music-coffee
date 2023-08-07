export type SearchMenuItemType = {};

export type SearchMenuType = {};

export type SearchViewType = {
  placeholder: string;
};

export type SearchType = {
  placeholder?: string;
  onClick?: () => void;
  onChange?: () => void;
  onBeforeChange?: () => void;
  onAfterChanage?: () => void;
};

export type SearchContextType = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
};
