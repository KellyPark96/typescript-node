import { ReactNode, useState } from 'react';
import { Col, Divider, Input, Layout, Menu, Row } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { IReducerState } from '../reducers';
import { MenuProps } from 'antd/lib';
import { useRouter } from 'next/router';

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
      label: <Link href="/signup">SignUp</Link>,
      key: 'signup',
    },
  ];

  const [current, setCurrent] = useState(pathName);
  const onClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider style={siderStyle}>
        <Menu
          mode="vertical"
          onClick={onClickMenu}
          selectedKeys={[current]}
          items={items}
          style={{ flex: 1, border: 0, justifyContent: 'flex-end', backgroundColor: 'inherit' }}
        />
        <Divider style={{ margin: '40px 0' }} />
        <SearchInput enterButton size="large" style={{ width: '100%' }} />
      </Sider>
      <Layout>
        <Header style={headerStyle}>{me ? <UserProfile /> : <LoginForm />}</Header>
        <Content>
          <Row gutter={8}>
            <Col xs={24} md={18}>
              {children}
            </Col>
            <Col xs={24} md={6}>
              <a href="https://github.com/KellyPark96" target="_blank" rel="noreferrer noopener">
                Github
              </a>
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
  width: '320px !important',
  maxWidth: '320px !important',
  minWidth: '320px !important',
  backgroundColor: '#fff',
  boxShadow: '4px 0px 10px 0px rgba(0, 0, 0, 0.04)',
  padding: '40px 10px 0 10px',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F6F7F8',
  padding: '0 40px',
};
