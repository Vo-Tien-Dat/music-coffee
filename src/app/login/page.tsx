"use client";

import React, { useState, useEffect } from "react";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Divider,
  Space,
} from "antd";
import { Grid, Tag } from "antd";
import { Col, Row } from "antd";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import OAuth2LoginButton from "@/components/OAuth2LoginButton";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import type { FormInstance } from "antd";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const { useBreakpoint } = Grid;

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const LoginButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false);
  return (
    <Button
      type="link"
      htmlType="submit"
      className="mb-2 block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white bg-neutral-950 hover:bg-neutral-800"
      size="large"
    >
      <Typography className={classNames("text-base text-white")}>
        Log In
      </Typography>
    </Button>
  );
};

export default function Login() {
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const screens = useBreakpoint();
  const [form] = Form.useForm();

  const [isActiveImage, setActiveImage] = useState<boolean>(true);

  useEffect(() => {
    Object.entries(screens).map((screen) => {
      if (screen[0] === "xl") {
        setActiveImage(screen[1]);
      }
    });
  }, [screens]);

  return (
    <Row className={classNames("w-screen h-screen  bg-slate-500")}>
      <Col
        span={isActiveImage ? 12 : 24}
        className={classNames("bg-white h-full w-full py-8 px-8")}
      >
        <Image
          src="/assets/img/logo/coffee_logo.svg"
          alt="image"
          height={36}
          width={36}
        />
        <Space
          direction="horizontal"
          className={classNames("px-8 flex flex-col ")}
        >
          <Typography className={classNames("text-2xl  font-semibold")}>
            Log In with Music & Coffee
          </Typography>{" "}
          <Form
            className={classNames("bg-white w-full")}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{
              maxWidth: 600,
              width: "100%",
              minWidth: 300,
            }}
            form={form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout={formLayout}
          >
            <Form.Item
              name="username"
              label={
                <Typography className=" text-base font-semibold">
                  User name
                </Typography>
              }
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder="User name" size="large" />
            </Form.Item>

            <Form.Item
              className="w-full"
              name="password"
              label={
                <Typography className=" text-base font-semibold">
                  Password
                </Typography>
              }
              wrapperCol={{ span: 24 }}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 24 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <LoginButton form={form} />
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 24 }}
              className={classNames("flex flex-row justify-center ")}
            >
              <Link
                href="forgot-password"
                className={classNames("text-base font-semibold")}
              >
                Forgot your password ?
              </Link>
            </Form.Item>
            <Divider>
              <Typography className={classNames("text-base")}>Or</Typography>
            </Divider>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Space direction="vertical" className={classNames("w-full")}>
                <OAuth2LoginButton
                  icon={faGoogle}
                  label="Login in with Google"
                />
                <OAuth2LoginButton
                  icon={faFacebookF}
                  label="Login in with Facebook"
                />
              </Space>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Space direction="horizontal">
                <Typography className={classNames("text-base")}>
                  Don't have account yet?{" "}
                </Typography>
                <Link href="/sign-up" className={classNames("font-semibold")}>
                  <Button type="link">
                    <Typography
                      className={classNames("text-base font-semibold")}
                    >
                      Sign Up
                    </Typography>
                  </Button>
                </Link>
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </Col>

      {isActiveImage && (
        <Col span={12} className={classNames()}>
          <Image
            src="/assets/img/login/bg_login.png"
            alt="image"
            layout="fill"
          />
        </Col>
      )}
    </Row>
  );
}
