"use client";
import { Col, Row, Space } from "antd";
import classNames from "classnames";
import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBinoculars,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";

export default function HomeLayout(props: {
  children: React.ReactNode;
  queue: React.ReactNode;
  player: React.ReactNode;
}) {
  return (
    <Row className={classNames("h-full w-full")}>
      <Col className={classNames("h-screen")} span={4}>
        <Image
          src="/assets/img/logo/coffee_logo.svg"
          alt="image"
          height={36}
          width={36}
        />
        <Sidebar />
      </Col>
      <Col span={15}>
        <div className="flex flex-col h-full w-full">
          <Header />
          {props.children}
        </div>
      </Col>
      <Col span={5}>
        <div className="flex flex-col">
          {/* <div className="grow">{props.queue}</div>
          <div className="shrink">{props.player}</div> */}
        </div>
      </Col>
    </Row>
  );
}
