import { Button, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { IReducerState } from '../reducers';
import Post from '../interface/post';

interface Props {
  post: Post;
}

const CommentForm = ({ post }: Props) => {
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector((state: IReducerState) => state.user);
  const onSubmitComment = useCallback(() => {
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
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        삐약
      </Button>
    </Form>
  );
};

export default CommentForm;
