import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { OwnerList } from "../types/OwnerList";
import { Person } from "../types/Person";
import { List } from "antd";

export interface ListProps {
  ownersList: OwnerList
}

export default function ListPage({ ownersList }: ListProps) {

  return (
    <div>
      {ownersList?.data.map((person: Person, index) => (
        <div key={index}>
          <Link as={`/${person.id}/${person.first_name}`} href="/[id]/[person]">
            <a>
              Navigate to {person.first_name}'s {person.email}
            </a>
          </Link>
        </div>
      ))}
      <List
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={ownersList.data}
          renderItem={item => <List.Item>{item.first_name}</List.Item>}
      />
    </div>
  );
}


export async function getStaticProps() {

  const response = await fetch(`https://reqres.in/api/users?page=1`);
  const ownerData: OwnerList = await response.json();

  return {
    props: {
      ownersList: ownerData
    }
  }
}
