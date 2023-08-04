import React from 'react';
import { Popover, Card, Button } from 'antd';
import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined } from '@ant-design/icons';
import ButtonGroup from 'antd/lib/button/button-group';

const PostCard = ({ post }) => {
  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key='retweet' />,
          <HeartOutlined key='heart' />,
          <MessageOutlined key='comment' />,
          <Popover key='more' content={(
            <ButtonGroup>
              <Button>Edit</Button>
              <Button type='danger'>Delete</Button>
              <Button>Report</Button>
            </ButtonGroup>
          )}>
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Image />
        <Content />
        <Buttons />
      </Card>
      <CommentForm />
      <Comments />
    </div>
  );
};
export default PostCard;