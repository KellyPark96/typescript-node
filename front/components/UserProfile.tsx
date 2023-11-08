import { Avatar, Button, Card } from 'antd';
import { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import { IReducerState } from '../reducers';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state: IReducerState) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <Card
      style={{ width: "100%" }}
      actions={[
        <div key="twit">
          Twit
          <br />
          {me.Posts.length}
        </div>,
        <div key="following">
          Following
          <br />
          {me.Followings.length}
        </div>,
        <div key="follower">
          Follower
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
      <LogOutButton onClick={onLogOut} loading={logOutLoading}>
        Logout
      </LogOutButton>
    </Card>
  );
};

const LogOutButton = styled(Button)`
  margin-top: 10px;
`;

export default UserProfile;
