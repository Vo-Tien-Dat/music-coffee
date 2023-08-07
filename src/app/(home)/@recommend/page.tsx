import { Space, Typography } from "antd";

export default function Recommend() {
  return (
    <Space direction="vertical">
      <Space direction="horizontal" className="flex flex-row justify-between">
        <Typography className="text-base font-semibold">
          Recomended For You
        </Typography>
      </Space>
    </Space>
  );
}
