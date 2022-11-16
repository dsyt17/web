import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import { postType } from "../../types";
import { FC } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

type postsProps = {
  posts: [postType];
};

const Posts: FC<postsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" tag="h1" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link className="link" href={`/posts/${id}`}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
