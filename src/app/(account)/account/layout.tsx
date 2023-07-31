"use client";
import { Row, Col, Space } from "antd";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { MenuProps, MenuTheme } from "antd";
import { Menu, Switch } from "antd";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faKey, faPen } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import MenuItem from "antd/es/menu/MenuItem";
import Link from "next/link";

type HrefProps = string;
type MenuItem = Required<MenuProps & HrefProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  href?: HrefProps
): MenuItem {
  return {
    key,
    icon,
    label,
    href,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Modify Information",
    "sub1",
    <FontAwesomeIcon icon={faPen} />,
    "modify-information"
  ),

  getItem(
    "Change password",
    "sub2",
    <FontAwesomeIcon icon={faKey} />,
    "change-password"
  ),

  getItem(
    "Setting Notification",
    "sub4",
    <FontAwesomeIcon icon={faBell} />,
    "setting-notification"
  ),
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<MenuTheme>("dark");
  const [current, setCurrent] = useState("1");
  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {}, [current]);

  return (
    <Row className={classNames("h-screen w-full")}>
      <Col span={6}>
        <Space
          direction="vertical"
          className={classNames("h-full w-full py-8 bg-neutral-200")}
        >
          <Link href={"/"}>
            <Image
              src="/assets/img/logo/coffee_logo.svg"
              alt="image"
              height={36}
              width={36}
            />
          </Link>

          <Menu
            className={classNames("bg-inherit h-full w-full")}
            onClick={onClick}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Space>
      </Col>
      <Col span={18}>{children}</Col>
    </Row>
  );
}
