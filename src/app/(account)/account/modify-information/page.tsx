"use client";
import React from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Space,
} from "antd";
import { Typography, Image } from "antd";
import classNames from "classnames";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export default function ModifyInformationPage() {
  return (
    <Space
      direction="vertical"
      className={classNames("h-full w-full px-32 py-32")}
    >
      <Typography className={classNames("text-2xl font-bold")}>
        Modify Information
      </Typography>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className={classNames("h-full w-full")}
      >
        <Form.Item
          label={
            <Typography className={classNames("text-base font-semibold")}>
              Email
            </Typography>
          }
          name="username"
        >
          <Input className={classNames("w-full")} size="large" />
        </Form.Item>

        <Form.Item
          label={
            <Typography className={classNames("font-semibold text-base")}>
              Sex
            </Typography>
          }
        >
          <Select size="large">
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <Typography className={classNames("font-semibold text-base")}>
              Birth Of Day
            </Typography>
          }
          className={classNames("w-full")}
        >
          <DatePicker style={{ width: "100%" }} size="large" />
        </Form.Item>

        <Form.Item
          label={
            <Typography className={classNames("font-semibold text-base")}>
              Country
            </Typography>
          }
        >
          <Select size="large">
            <Select.Option value="demo">Viet name</Select.Option>
            <Select.Option value="demo">Thai lan</Select.Option>
            <Select.Option value="demo">Phan Lan </Select.Option>
            <Select.Option value="demo">My </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 16 }}
          className={classNames("flex flex-row justify-end")}
        >
          <Button
            type="link"
            htmlType="submit"
            className={classNames("bg-neutral-950 hover:bg-neutral-800")}
            size="large"
          >
            <Typography
              className={classNames("text-white font-semibold text-base")}
            >
              Save
            </Typography>
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
}
