import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { fetchPostThread } from "../../Redux/board-reducer";
import { Footer } from "antd/lib/layout/layout";
import { Button, Input, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";

const ThreadForm = () => {
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector((state) => state.boardReducer.isFetching);

  const onFinish = (data) => {
    console.log("Success:", data);
    let threadPostingData = {
      title: data.title,
      threadText: data.text,
      imgs: data.imgs,
    };
    dispatch(fetchPostThread({ threadPostingData }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please thread title",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Text"
          name="text"
          rules={[
            {
              required: true,
              message: "Please input thread text!",
            },
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="Imgs"
          name="imgs"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={isFetching ? { color: "red" } : {}}
          disabled={isFetching ? true : false}
        >
          Post
        </Button>
      </Form>
    </div>
  );
};

export default ThreadForm;
