import { Space, Typography } from "antd";
import classNames from "classnames";

export default function ChangePasswordPage() {
  return (
    <div className={classNames("h-full w-full")}>
      <Space direction="vertical">
        <Typography className={classNames("text-xl font-bold")}>
          Setting password
        </Typography>
      </Space>
    </div>
  );
}
