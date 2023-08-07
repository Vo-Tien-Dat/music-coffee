"use client";
import DiscoverContent from "@/components/elements/DiscoverContent";
import { Col, Row, Space } from "antd";

export default function DiscoverPage() {
  return (
    <div className="flex">
      <DiscoverContent
        title="hello world"
        label="hello"
        href="/hello"
        items={["", "", "", ""]}
      />
    </div>
  );
}
