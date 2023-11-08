import { ReactNode, useState } from 'react';
import { Button, Col, Divider, Input, Layout, Menu, Row } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';
import { IReducerState } from '../reducers';
import { MenuProps } from 'antd/lib';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { GithubOutlined } from '@ant-design/icons';

type LayoutProps = {
  children: ReactNode;
};

const { Header, Content, Sider } = Layout;

const AppLayout = ({ children }: LayoutProps) => {
  const me = useSelector((state: IReducerState) => state.user.me);
  const router = useRouter();

  const pathName = router.asPath.split('/')[1] === '' ? 'home' : router.asPath.split('/')[1];

  const items: MenuProps['items'] = [
    {
      label: <Link href="/">Home</Link>,
      key: 'home',
    },
    {
      label: <Link href="/profile">Profile</Link>,
      key: 'profile',
    },
    {
      label: <Link href="/login">Login</Link>,
      key: 'login',
    },
  ];

  const loggedInItems = items.filter((item) => item.key !== 'login');

  const [current, setCurrent] = useState(pathName);
  const onClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider style={siderStyle}>
        <Image
          onClick={() => {
            router.push('/');
          }}
          width={116}
          height={30}
          src={'/images/KELLY.svg'}
          alt="KELLY"
          style={{ cursor: 'pointer', marginBottom: 40 }}
        />
        <Divider style={{ margin: '40px 0' }} />
        {me && <Header style={headerStyle}>{<UserProfile />}</Header>}
        <Menu
          mode="vertical"
          onClick={onClickMenu}
          selectedKeys={[current]}
          items={me ? loggedInItems : items}
          style={{ flex: 1, border: 0, justifyContent: 'flex-end', backgroundColor: 'inherit' }}
        />
        <Divider style={{ margin: '40px 0' }} />
        <SearchInput enterButton size="large" style={{ width: '100%' }} />
        <Button type="link" icon={<GithubOutlined />}>
          <Link href="https://github.com/KellyPark96" target="_blank" rel="noreferrer noopener">
            Github
          </Link>
        </Button>
      </Sider>
      <Layout>
        <Content>
          <Row gutter={8}>
            <Col xs={24} md={24}>
              {children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

export default AppLayout;

const siderStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  boxShadow: '4px 0px 10px 0px rgba(0, 0, 0, 0.04)',
  padding: '60px 24px 0 24px',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  padding: 0,
  width: '100%',
  height: 'auto',
  marginBottom: '20px',
};
