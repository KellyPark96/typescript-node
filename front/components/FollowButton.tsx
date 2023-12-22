import { useCallback } from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';
import { IReducerState } from '../reducers';

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector((state: IReducerState) => state.user);
  const isFollowing = me?.Followings.find((following) => following.id === post.User.id);
  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  //   if (post.User.id === me.id) {
  //     return null;
  //   }

  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
};

export default FollowButton;
