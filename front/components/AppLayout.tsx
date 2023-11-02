import { ReactNode, useState } from 'react';
import { Col, Input, Menu, Row } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';
import { IReducerState } from '../reducers';
import { MenuProps } from 'antd/lib';

type LayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: LayoutProps) => {
  const me = useSelector((state: IReducerState) => state.user.me);

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

  const [current, setCurrent] = useState('home');
  const onClickMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
          alignItems: 'center',
        }}
      >
        <Menu
          mode="horizontal"
          onClick={onClickMenu}
          selectedKeys={[current]}
          items={items}
          style={{ flex: 1, border: 0 }}
        />
        <SearchInput enterButton style={{ width: 200 }} />
      </div>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/KellyPark96" target="_blank" rel="noreferrer noopener">
            Github
          </a>
        </Col>
      </Row>
    </div>
  );
};

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

export default AppLayout;
