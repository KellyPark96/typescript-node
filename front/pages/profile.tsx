import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import User from '../interface/user';
import { useSelector } from 'react-redux';
import { IReducerState } from '../reducers';
import { useEffect } from 'react';

export type followListProps = Partial<User>;

const Profile = () => {
  const { me } = useSelector((state: IReducerState) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="Following List" data={me.Followings} />
      <FollowList header="Follower List" data={me.Followers} />
    </AppLayout>
  );
};

export default Profile;
