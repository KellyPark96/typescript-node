import { Avatar, Button, Card } from 'antd';
import { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLogginOut } = useSelector((state) => state.user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">Twit</div>,
        <div key="following">Following</div>,
        <div key="follower">Follower</div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
      <LogOutButton onClick={onLogOut} loading={isLogginOut}>
        Logout
      </LogOutButton>
    </Card>
  );
};

const LogOutButton = styled(Button)`
  margin-top: 10px;
`;

export default UserProfile;
