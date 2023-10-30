import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import User from '../interface/user';

export type followListProps = Partial<User>;

const Profile = () => {
  const followerList = [{ nickname: 'Kelly1' }, { nickname: 'Kelly2' }, { nickname: 'Kelly3' }];

  const followingList: followListProps[] = [
    { nickname: 'Andy1' },
    { nickname: 'Andy2' },
    { nickname: 'Andy3' },
  ];
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="Following List" data={followingList} />
      <FollowList header="Follower List" data={followerList} />
    </AppLayout>
  );
};

export default Profile;
