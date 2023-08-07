import React, { useContext, useEffect, createContext, useRef } from "react";
import { Space, Typography } from "antd";
import { Grid } from "antd";
import Image from "next/image";
import classNames from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  UserContextType,
  UserControlItemType,
  HeaderContextType,
} from "./types";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Profile from "@/components/elements/Profile";
import Search from "@/components/elements/Search";

const defaultUserContext: UserContextType = {
  expand: false,

  data: {
    src: "/assets/img/default-user/default-user.svg",
    name: "",
  },
};

const items: UserControlItemType[] = [
  {
    keys: "account",
    label: "account",
    icon: <FontAwesomeIcon icon={faGoogle} />,
  },
  {
    keys: "account1",
    label: "account",
    icon: <FontAwesomeIcon icon={faGoogle} />,
  },
  {
    keys: "account2",
    label: "account",
    icon: <FontAwesomeIcon icon={faGoogle} />,
  },
  {
    keys: "account",
    label: "account",
    icon: <FontAwesomeIcon icon={faGoogle} />,
  },
];

const handleClickItem = (key?: string): void => {
  console.log(key);
};

const { useBreakpoint } = Grid;

const defaultHeaderContext: HeaderContextType = {};

const HeaderContext = createContext<HeaderContextType>(defaultHeaderContext);
const { Provider } = HeaderContext;

const Header = (): JSX.Element => {
  const screens = useBreakpoint();
  const headerValue: HeaderContextType = {};
  return (
    <Provider value={headerValue}>
      <div
        className={classNames(
          " flex flex-row justify-between w-full border border-slate-200 px-4 py-2"
        )}
      >
        <div className="grow">
          <Search />
        </div>
        <div className="shrink">
          <Profile
            data={{
              name: "Vo tien dat",
            }}
            items={items}
            onClick={handleClickItem}
          />
        </div>
      </div>
    </Provider>
  );
};

export default Header;
