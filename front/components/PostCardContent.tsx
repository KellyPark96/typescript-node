import Link from "next/link";

const PostCardContent = ({ postData }) => {
  return (
    <div>{postData.split(/#[^\s#]+/g).map(v => {
      if(v.match(/#[^\s#]+/)){
        return <Link key={v + Math.random()} href={`/hastag/${v.slice(1)}`}><a>{v}</a></Link>
      }
      return v;
    })}</div>
  );
};

export default PostCardContent;