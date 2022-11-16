import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Contacts.module.scss";
import { GetStaticProps } from "next";
import { contactType } from "../../types";
import { FC } from "react";

// import { useEffect, useState } from "react";

type contactsTypeProps = {
  contacts: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<contactsTypeProps> = ({ contacts }) => {
  // const [contacts, setContacts] = useState(null);

  // useEffect(() => {
  // const fetchData = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await res.json();
  //   setContacts(data);
  // };
  // fetchData();
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setContacts(data));
  // }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text={"Contacts"} tag="h1" />
      <p>Here all contacts</p>
      <ul>
        {contacts &&
          contacts.map(({ name, email, username, id }) => (
            <li key={id}>
              <Link className={styles.links} href={`/contacts/${id}`}>
                <strong>{name}</strong>
              </Link>
              | {username} | {email}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
