import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";
import PostInfo from "../../components/PostInfo";
import { postType } from "../../types";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await res.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

type postProps = {
  post: postType;
};

const Post: FC<postProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
