import React  from "react";
import A from "../components/link/a";
import NavbarLayout from "../components/navbarLayout/navbarLayout";

export default function Users({users}: any) {


  return (
    <NavbarLayout keywords={"list users"}>
      <h1>Список пользователей:</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <A href={`/users/${user.id}`} text={user.name} />
          </li>
        ))}
      </ul>
    </NavbarLayout>
  );
}
export const getStaticProps = async (context: any) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const users = await response.json();

  return {
    props: {users}, // will be passed to the page component as props
  }
}