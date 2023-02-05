import React, { useState } from "react";
import "../ThreadReply.css";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { fetchPostThreadReply } from "../../../../Redux/board-reducer";

const ThreadReplyForm = ({ parentThreadId }) => {
  const [files, setFiles] = useState([]);
  const dispatch = useAppDispatch();
  const isFetching = useAppSelector((state) => state.boardReducer.isFetching);

  const [form] = Form.useForm();

  const onFinish = (data) => {
    console.log("Success:", data, parentThreadId);
    if (parentThreadId && typeof parentThreadId === "number") {
      let threadReplyPostingData = {
        replyText: data.replyText,
        parentThreadId: parentThreadId,
        imgs: files,
      };
      console.log("on finish", threadReplyPostingData, parentThreadId);
      dispatch(fetchPostThreadReply({ threadReplyPostingData }));
      form.resetFields();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="thread-reply-form">
      <Form
        form={form}
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
          label="replyText"
          name="replyText"
          rules={[
            {
              required: true,
              message: "Please reply text",
            },
          ]}
        >
          <Input />
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
          <Upload
            beforeUpload={() => false}
            onChange={({ fileList }) => {
              console.log("File list is", fileList);
              let filteredFileList = fileList.filter(
                (file) =>
                  file.type === "image/jpeg" || file.type === "image/png"
              );

              setFiles(filteredFileList);
            }}
          >
            <Button icon={<UploadOutlined />}>Загрузить изображения</Button>
          </Upload>
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

export default ThreadReplyForm;
