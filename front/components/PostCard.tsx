import React, { useCallback, useState } from 'react';
import { Popover, Card, Button, Avatar, List } from 'antd';
import { Comment } from '@ant-design/compatible';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import ButtonGroup from 'antd/lib/button/button-group';
import { useSelector } from 'react-redux';
import PostImages from './PostImages';
import CommentForm from './CommentForm';

export interface Props {
  post: {
    id: number,
    User: object,
    content: string,
    createAt: object,
    Comments: Array<string>,
    Images: Array<string>,
  };
}

const PostCard = ({ post }: Props) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const id = useSelector((state) => state.user.me?.id);

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key='retweet' />,
          liked
            ? <HeartTwoTone twoToneColor='#eb2f96' key='heart' onClick={onToggleLike} />
            : <HeartOutlined key='heart' onClick={onToggleLike} />,
          <MessageOutlined key='comment' onClick={onToggleComment} />,
          <Popover key='more' content={(
            <ButtonGroup>
              {id && post.User.id === id ? (
                <>
                  <Button>Edit</Button>
                  <Button type='danger'>Delete</Button>
                </>
              ) : (<Button>Report</Button>)}
            </ButtonGroup>
          )}>
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content} />
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} comments`}
            itemLayout='horizontal'
            dataSource={post.Comments}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};
export default PostCard;