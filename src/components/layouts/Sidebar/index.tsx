"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBinoculars,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

type MenuItemType = {
  key: string;
  href: string;
  label: string | ReactNode;
  icon?: ReactNode;
};

export const MenuItem = ({ key, label, href, icon }: MenuItemType) => {
  return (
    <Menu.Item key={key} icon={icon}>
      <Link href={href}>{label}</Link>
    </Menu.Item>
  );
};

const items: MenuItemType[] = [
  {
    key: "home",
    href: "/",
    label: "Home",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    key: "discover",
    href: "/discover",
    label: "Discover",
    icon: <FontAwesomeIcon icon={faBinoculars} />,
  },
  {
    key: "library",
    href: "/library",
    label: "Library",
    icon: <FontAwesomeIcon icon={faBook} />,
  },
];

export default function Sidebar() {
  return (
    <Menu mode="vertical" className="h-full w-full px-2 py-2">
      {/* {items.map((item: MenuItemType) => (
        <MenuItem {...item} />
      ))} */}

      <Menu.Item key="home" icon={<FontAwesomeIcon icon={faHome} />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="discover" icon={<FontAwesomeIcon icon={faBinoculars} />}>
        <Link href="/discover">Discover</Link>
      </Menu.Item>
      <Menu.Item key="library" icon={<FontAwesomeIcon icon={faBook} />}>
        <Link href="/library">Library</Link>
      </Menu.Item>
    </Menu>
  );
}
