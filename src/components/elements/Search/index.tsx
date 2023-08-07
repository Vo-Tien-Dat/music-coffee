import React, { createContext, useContext, useState } from "react";
import { Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { SearchType, SearchContextType } from "./types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const SearchContext = createContext<Partial<SearchContextType>>({
  value: "",
});

const { Provider } = SearchContext;

const SearchIcon = () => {
  const { value, setValue } = useContext(SearchContext);
  const handleDeleteValue = () => {
    setValue?.("");
  };
  return (
    value !== "" && (
      <FontAwesomeIcon icon={faXmark} onClick={handleDeleteValue} />
    )
  );
};

const SearchView = () => {
  const { value, setValue } = useContext(SearchContext);

  const handleChangeValue = (e: any) => {
    setValue?.(e.target.value);
  };

  return (
    <div
      className=" flex flex-row justify-start items-center rounded-full px-4 py-2 border-2 bg-neutral-200"
      style={{
        width: 256,
      }}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-neutral-600" />
      <input
        className="bg-inherit focus:outline-none grow mx-2"
        type="text"
        value={value}
        onChange={handleChangeValue}
      />
      <SearchIcon />
    </div>
  );
};

const SearchMenuItem = () => {};

const SearchMenu = () => {
  return <div className="h-full"></div>;
};

type SearchProps = SearchType;

const Search = (props: SearchProps) => {
  const [value, setValue] = useState<string>("");

  const searchProviderValue: SearchContextType = { value, setValue };

  return (
    <Provider value={searchProviderValue}>
      <div className="flex flex-col">
        <SearchView />
        <SearchMenu />
      </div>
    </Provider>
  );
};

export default Search;
