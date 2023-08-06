import { Button, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

interface Props {
  post: {
    id: number,
    User: object,
    content: string,
    createAt: object,
    Comments: Array<string>,
    Images: Array<string>,
  };
}

const CommentForm = ({ post }: Props) => {
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector((state) => state.user);
  const onSubmitComment = useCallback((e) => {
    if (!me) {
      return alert('로그인이 필요합니다');
    }
    return console.log(post.id, commentText);
  }, [commentText]);
  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea
          rows={4}
          value={commentText}
          onChange={onChangeCommentText}
        />
      </Form.Item>
      <Button type='primary' htmlType='submit'>삐약</Button>
    </Form>
  );
};

export default CommentForm;