import Link from 'next/link';

type PostCardContentProps = {
  postData: string;
};

const PostCardContent = ({ postData }: PostCardContentProps) => {
  return (
    <div>
      {postData &&
        postData.split(/#[^\s#]+/g).map((v) => {
          if (v.match(/#[^\s#]+/)) {
            return (
              <Link key={v + Math.random()} href={`/hastag/${v.slice(1)}`}>
                <a>{v}</a>
              </Link>
            );
          }
          return v;
        })}
    </div>
  );
};

export default PostCardContent;
