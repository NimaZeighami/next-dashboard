import * as React from "react";
import UserTable from "@/app/_components/user-table";

async function getUsers() {
  const response = await fetch("http://localhost:3000/api/user ", { method: "GET" });
  return response.json();
}

export default async function User(props: any) {
  const data = await getUsers();

  console.log("DATA" , data);
  
  return <UserTable  data={data}/>;
}
