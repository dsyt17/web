import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";
import ContactInfo from "../../components/ContactInfo";
import Heading from "../../components/Heading";
import { contactType } from "../../types";

type contactTypeProps = {
  contact: contactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contact: data },
  };
};

const Contact: FC<contactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
