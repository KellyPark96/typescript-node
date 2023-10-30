import { Button, Card, List } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { followListProps } from '../pages/profile';

interface ListProps extends followListProps {
  header: string;
  // data: User[];
  data: followListProps[];
}

const FollowList = ({ header, data }: ListProps) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>more</Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: '20px' }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default FollowList;
