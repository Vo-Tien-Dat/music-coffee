import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useRef,
} from "react";
import { Typography } from "antd";

import Image from "next/image";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  UserContextType,
  UserIconType,
  UserProps,
  UserViewType,
  UserControlType,
  UserControlItemType,
} from "./types";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const defaultUserContext: UserContextType = {
  expand: false,

  data: {
    src: "/assets/img/default-user/default-user.svg",
    name: "",
  },
};

const UserContext = createContext<UserContextType>(defaultUserContext);

const { Provider } = UserContext;

const UserIcon = ({ iconOpened, iconClosed }: UserIconType) => {
  const { expand } = useContext(UserContext);

  return expand ? iconOpened : iconClosed;
};

const UserView = ({ src, name }: UserViewType) => {
  const { expand, setExpand } = useContext(UserContext);
  const userViewRef = useRef<any>(null);
  const handleExpand = () => {
    setExpand?.(!expand);
  };

  const handleClickOutsideUserView = (event: any): void => {
    if (userViewRef.current && !userViewRef.current.contains(event.target)) {
      setExpand?.(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideUserView);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideUserView);
    };
  }, [userViewRef]);

  return (
    <div
      onClick={handleExpand}
      className={classNames(
        "bg-neutral-200 px-4 py-2 rounded-full flex flex-row justify-start items-center gap-2 w-40"
      )}
      ref={userViewRef}
    >
      <Image
        src={src ?? defaultUserContext.data.src ?? ""}
        alt="image"
        height={28}
        width={28}
      />
      {typeof name === "string" ? (
        <Typography
          className={classNames("text-base font-semibold truncate grow")}
        >
          {name}
        </Typography>
      ) : (
        name
      )}
      <UserIcon
        iconOpened={<FontAwesomeIcon icon={faCaretRight} />}
        iconClosed={<FontAwesomeIcon icon={faCaretDown} />}
      />
    </div>
  );
};

const UserControlItem = ({ keys, icon, label }: UserControlItemType) => {
  const { onClick } = useContext(UserContext);

  return (
    <div
      className="flex flex-row justify-start  items-center hover:bg-neutral-200 rounded-md px-4 py-2 gap-2"
      onClick={() => {
        onClick?.(keys);
      }}
    >
      {icon}
      {typeof label === "string" && (
        <Typography className="text-base font-semibold grow">
          {label}
        </Typography>
      )}
      {typeof label !== "string" && label}
    </div>
  );
};

const UserControl = ({ items }: UserControlType) => {
  const { expand } = useContext(UserContext);
  return (
    expand && (
      <div
        className="absolute w-full border border-neutral-200 bg-white max-height-6 px-2 py-2 rounded-md overflow-auto"
        style={{
          maxHeight: 256,
        }}
      >
        {items?.map((item: UserControlItemType) => {
          return (
            <UserControlItem
              keys={item.keys}
              icon={item.icon}
              label={item.label}
            />
          );
        })}
      </div>
    )
  );
};

const Profile = ({ data, items, onClick }: UserProps) => {
  const [expand, setExpand] = useState<boolean>(false);
  const userViewRef = useRef<HTMLElement>(null);
  const { src, name } = data;
  const value: UserContextType = {
    expand,
    data,
    onClick,
    setExpand,
  };

  return (
    <Provider value={value}>
      <div className={classNames("relative")}>
        <UserView src={src} name={name} />
        <div className="mt-2">
          <UserControl items={items} />
        </div>
      </div>
    </Provider>
  );
};

export default Profile;
