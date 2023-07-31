"use client";
import React, { useState, useEffect } from "react";
import { Row, Col, StepProps, Typography } from "antd";
import { Button, Form, Input, Space } from "antd";
import classNames from "classnames";
import { Steps } from "antd";
import type { FormInstance } from "antd";
import { Grid } from "antd";
import Link from "next/link";
import Image from "next/image";

const { useBreakpoint } = Grid;

const items: StepProps[] = [
  {
    title: "Your details",
    description: "Please provide user name and email",
  },
  {
    title: "User background",
    description: "Update image and personal information",
  },
];

const SubmitButton = ({
  form,
  onChange,
}: {
  form: FormInstance;
  onChange?: (value: number) => void;
}) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <Button
      type="link"
      htmlType="submit"
      disabled={!submittable}
      className={classNames("w-full bg-neutral-950 hover:bg-neutral-900")}
      size="large"
    >
      <Typography className={classNames("text-white font-semibold")}>
        Continue
      </Typography>
    </Button>
  );
};

export default function SignUp() {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const [isActiveProcessing, setActiveProcessing] = useState<boolean>(true);

  const onChange = (value: number): void => {
    setCurrent(value);
  };

  useEffect(() => {
    Object.entries(screens).map((screen) => {
      screen[0] == "xl" && setActiveProcessing(screen[1]);
    });
  }, [screens]);

  return (
    <div className={classNames("w-screen h-screen")}>
      <Row className={classNames("h-full")}>
        <Col
          span={isActiveProcessing ? 8 : 0}
          className={classNames("bg-neutral-200 px-8 py-8")}
        >
          <div className={classNames("h-full w-full flex flex-col")}>
            <Space>
              <Image
                src="/assets/img/logo/coffee_logo.svg"
                alt="image"
                height={36}
                width={36}
              />
            </Space>

            <Space className={classNames("py-4 grow")} direction="vertical">
              <Steps
                current={current}
                direction="vertical"
                items={items}
                style={{ flexGrow: 1 }}
              />
            </Space>

            <Row justify="space-between" align="middle">
              <Col span={12}>
                <Typography>@Music And Coffee 2023</Typography>
              </Col>
              <Col span={12}>
                <Typography>contact@musisandcoffee.com</Typography>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={isActiveProcessing ? 16 : 24}>
          <Space
            direction="vertical"
            className={classNames("h-full w-full  py-8 px-8")}
          >
            <div className="h-full w-full flex flex-row justify-end">
              <Link href="/login">
                <Button
                  type="link"
                  size="large"
                  className={classNames(
                    "border-neutral-500 border-2 hover:bg-neutral-100"
                  )}
                >
                  <Typography
                    className={classNames("text-base text-black font-semibold")}
                  >
                    Log In
                  </Typography>
                </Button>
              </Link>
            </div>

            <Space
              direction="vertical"
              align="center"
              className={classNames("h-full w-full")}
            >
              <Typography className={classNames("text-xl font-semibold")}>
                Your Details
              </Typography>
              <Form
                form={form}
                name="validateOnly"
                layout="vertical"
                autoComplete="off"
                style={{ maxWidth: 450, minWidth: 300 }}
              >
                <Form.Item
                  name="user_name"
                  label={<Typography>User name</Typography>}
                >
                  <Input size="large" />
                </Form.Item>
                <Form.Item
                  name="password"
                  label={<Typography>Password</Typography>}
                >
                  <Input.Password size="large" />
                </Form.Item>
                <Form.Item label={<Typography>Repeat Password</Typography>}>
                  <Input.Password size="large" />
                </Form.Item>
                <Form.Item name="email" label={<Typography>Email</Typography>}>
                  <Input size="large" />
                </Form.Item>
                <Form.Item>
                  <SubmitButton form={form} onChange={onChange} />
                </Form.Item>
              </Form>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
