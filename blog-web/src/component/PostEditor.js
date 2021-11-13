import { Button, Col, Input, Typography } from "antd";

import ReactQuill from "react-quill";

function PostEditor({ handleSubmit, isLoading, post, setPost }) {
  return (
    <>
      <Col span={24}>
        <Typography.Paragraph>*Title</Typography.Paragraph>
        <Input
          placeholder="Title of the post"
          value={post.title}
          onChange={(e) => setPost((pS) => ({ ...pS, title: e.target.value }))}
        />
      </Col>
      <Col span={24}>
        <Typography.Paragraph>Thumbnail URL</Typography.Paragraph>
        <Input
          placeholder="Thumbnail URL of the post (if empty a dummy image will be placed)"
          value={post.thumbnailUrl}
          onChange={(e) =>
            setPost((pS) => ({ ...pS, thumbnailUrl: e.target.value }))
          }
        />
      </Col>
      <Col span={24}>
        <Typography.Paragraph>*Body</Typography.Paragraph>
        <ReactQuill
          theme="snow"
          value={post.body}
          onChange={(content) => setPost((pS) => ({ ...pS, body: content }))}
        />
      </Col>

      <Col span={24} align="middle">
        <Button
          style={{ marginBottom: 50 }}
          disabled={isLoading}
          onClick={handleSubmit}
          type="primary"
          size="large"
        >
          Submit!
        </Button>
      </Col>
    </>
  );
}

export default PostEditor;
