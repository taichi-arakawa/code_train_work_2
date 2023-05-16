import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
export const ExtendButton = () => {
  const [display, setDisplay] = React.useState("none");

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleClick = () => {
    setDisplay("block");
  };

  // This syntax ensures `this` is bound within handleClick
  return (
    <div>
      <Button onClick={handleClick} style={{ margin: "10px 10px" }}>
        ログイン
      </Button>
      <Form
        name="basic"
        labelCol={{ span: 4 }} // ラベルの幅
        wrapperCol={{ span: 16 }} // テキストボックスの幅
        style={{ maxWidth: 600, margin: "auto", display: display }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <Form style={{ maxWidth: 600, margin: "auto", display: display }}>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 8 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
