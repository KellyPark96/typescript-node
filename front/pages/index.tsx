import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';
import { IReducerState } from '../reducers';

const Home = () => {
  const { logInDone } = useSelector((state: IReducerState) => state.user);
  console.log(logInDone);
  
  const { mainPosts } = useSelector((state: IReducerState) => state.post);
  console.log(mainPosts);

  return (
    <AppLayout>
      {logInDone && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
