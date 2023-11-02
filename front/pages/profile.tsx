import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import User from '../interface/user';
import { useSelector } from 'react-redux';
import { IReducerState } from '../reducers';

export type followListProps = Partial<User>;

const Profile = () => {
  const { me } = useSelector((state: IReducerState) => state.user);

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="Following List" data={me.followings} />
      <FollowList header="Follower List" data={me.followers} />
    </AppLayout>
  );
};

export default Profile;
