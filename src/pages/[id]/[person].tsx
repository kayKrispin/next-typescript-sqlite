import { useRouter } from 'next/router';
// @ts-ignore
import fetch from "node-fetch";
import { OwnerList } from "../../types/OwnerList";
import { GetStaticProps } from 'next'
import { Person } from "../../types/Person";

export interface PersonProps {
  owner: Person
}

export default function Owner({ owner }: PersonProps) {

  const router = useRouter();

  if (!owner) {
    return <div>loading...</div>
  }

  return (
    <div style={{ textAlign: "center" }}>
      <img src={owner.avatar} alt=""/>
      <h1>{router.query.person}</h1>
    </div>
  )
}


export const getStaticPaths = async () => {

  const res = await fetch('https://reqres.in/api/users?page=1');
  const users = await res.json();


  const paths = users.data.map((user: Person) => ({
    params: {
      id: user.id.toString(),
      person: user.first_name.toString()
    },
  }));

  return { paths, fallback: false }

};

export const getStaticProps: GetStaticProps = async ctx => {

  const { params } = ctx;

  const response = await fetch(`https://reqres.in/api/users/${params?.id}`);
  const owner: OwnerList = await response.json();

  return {
    props: {
      owner: owner.data
    }
  }
};
