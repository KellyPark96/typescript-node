import { Button, Form, Input } from 'antd';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IReducerState } from '../reducers';
import Post from '../interface/post';
import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

interface Props {
  post: Post;
}

const CommentForm = ({ post }: Props) => {
  const dispatch = useDispatch();
  const { addCommentDone, addCommentLoading } = useSelector((state: IReducerState) => state.post);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');
  const id = useSelector((state: IReducerState) => state.user.me?.id);

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, userId: id, postId: post.id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={addCommentLoading}>
        add Comment
      </Button>
    </Form>
  );
};

export default CommentForm;
