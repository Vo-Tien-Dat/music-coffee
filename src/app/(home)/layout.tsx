"use client";
import { Col, Row, Space } from "antd";
import classNames from "classnames";
import React from "react";
import { Menu } from "antd";
import Image from "next/image";

import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";

export default function HomeLayout(props: {
  children: React.ReactNode;
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
        {/* <div className="flex flex-col">{props.player}</div> */}
      </Col>
    </Row>
  );
}
