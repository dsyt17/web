import Heading from "../components/Heading";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <>
      <Heading text={"404"} tag="h1" />
      <p>Something goes wrong...</p>
    </>
  );
};

export default Error;
